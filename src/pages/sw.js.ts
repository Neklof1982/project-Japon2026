/**
 * Service worker generado en el build: así conoce la lista exacta de páginas y fotos.
 * - Páginas: red primero; sin conexión, la copia guardada.
 * - Fotos: se guardan todas en segundo plano la primera vez (caché propia, sobrevive a versiones).
 */
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import { url } from '../lib/url';

function listar(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? listar(p) : [p];
  });
}

export const GET: APIRoute = () => {
  const pub = path.resolve('public');
  const rel = (f: string) => path.relative(pub, f).split(path.sep).join('/');
  const paginas = ['', 'tokyo-llegada/', 'osaka/', 'kyoto/', 'tokyo/', 'creditos/'].map((p) => url(p));
  const fijos = ['favicon.svg', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'].map((p) => url(p));
  const fotos = listar(path.join(pub, 'img')).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).map((f) => url(rel(f)));
  const version = new Date().toISOString().replace(/\D/g, '').slice(0, 12);

  const js = `
const V = 'japon-paginas-${version}';
const IMG = 'japon-fotos-v1';
const PAGINAS = ${JSON.stringify([...paginas, ...fijos])};
const FOTOS = ${JSON.stringify(fotos)};

async function guardarFotos(avisar) {
  const c = await caches.open(IMG);
  let hechas = 0;
  for (const f of FOTOS) {
    try {
      if (!(await c.match(f))) { const r = await fetch(f); if (r.ok) await c.put(f, r); }
    } catch (e) {}
    hechas++;
    if (avisar && (hechas % 5 === 0 || hechas === FOTOS.length)) avisar({ tipo: 'progreso', hechas, total: FOTOS.length });
  }
}
async function estado() {
  const c = await caches.open(IMG);
  const k = await c.keys();
  const p = await caches.open(V);
  const kp = await p.keys();
  return { tipo: 'estado', fotos: k.length, total: FOTOS.length, paginas: kp.length, totalPaginas: PAGINAS.length };
}
async function avisarTodos(m) {
  for (const cl of await self.clients.matchAll()) cl.postMessage(m);
}

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(V).then((c) => Promise.allSettled(PAGINAS.map((p) => c.add(p)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V && k !== IMG) await caches.delete(k);
    await self.clients.claim();
    guardarFotos(avisarTodos);
  })());
});
self.addEventListener('message', (e) => {
  if (e.data === 'guardar-todo') e.waitUntil(guardarFotos(avisarTodos).then(estado).then(avisarTodos));
  if (e.data === 'estado') e.waitUntil(estado().then((m) => e.source && e.source.postMessage(m)));
});
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  const html = r.mode === 'navigate' || (r.headers.get('accept') || '').includes('text/html');
  if (html) {
    e.respondWith(
      fetch(r).then((res) => { const cp = res.clone(); caches.open(V).then((c) => c.put(r, cp)); return res; })
        .catch(() => caches.match(r, { ignoreSearch: true }).then((m) => m || caches.match(PAGINAS[0])))
    );
    return;
  }
  e.respondWith(
    caches.match(r, { ignoreSearch: true }).then((m) => m || fetch(r).then((res) => {
      if (res.ok && /\\/img\\//.test(r.url)) { const cp = res.clone(); caches.open(IMG).then((c) => c.put(r, cp)); }
      return res;
    }))
  );
});
`;
  return new Response(js, { headers: { 'Content-Type': 'application/javascript; charset=utf-8' } });
};
