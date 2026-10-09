import { LINEAS, codigo, type LineaId } from '../data/lineas';

/**
 * Fragmentos HTML reutilizables para usar dentro de textos (pasos, giros, tablas).
 * Generan exactamente el mismo marcado que los componentes <Linea> y <Est>.
 */

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/** Pastilla de línea: color + letra + nombre. `corta` deja solo la letra. */
export function lin(id: LineaId, corta = false): string {
  const L = LINEAS[id];
  const titulo = esc(`${L.nombre} · ${L.jp} · ${L.operador} · color ${L.colorEs}`);
  const nombre = corta ? '' : `<span>${L.nombre} <span class="jp">${L.jp}</span></span>`;
  return `<span class="linea${corta ? ' sola' : ''}" style="--lc:${L.color};--lt:${L.texto}" title="${titulo}"><span class="letra">${L.letra}</span>${nombre}</span>`;
}

/** Código de estación con el color de su línea (M18, H12, JR-D03…). */
export function est(id: LineaId, n: string | number, nombre?: string): string {
  const L = LINEAS[id];
  const c = codigo(id, n);
  const t = esc(`${c} · ${L.nombre}${nombre ? ' · ' + nombre : ''}`);
  return `<span class="est" style="--lc:${L.color}" title="${t}">${c}</span>${nombre ? ` <span class="est-nombre"><strong>${nombre}</strong></span>` : ''}`;
}

/** Dirección del tren (el destino final que pone en el andén). */
export function dir(destino: string): string {
  return `<span class="dir" title="Dirección del tren">→ ${destino}</span>`;
}

/** Enlace de Google Maps a un lugar. */
export function mapsLugar(q: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}

/** Enlace de Google Maps con ruta (a pie por defecto). */
export function mapsRuta(puntos: string[], modo: 'walking' | 'transit' | 'driving' = 'walking'): string {
  const [o, ...resto] = puntos;
  const d = resto.pop() ?? o;
  const p = new URLSearchParams({ api: '1', origin: o, destination: d, travelmode: modo });
  if (resto.length) p.set('waypoints', resto.join('|'));
  return `https://www.google.com/maps/dir/?${p.toString()}`;
}
