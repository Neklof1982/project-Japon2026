# Japón 2026 · Guía de viaje

Web estática hecha con [Astro](https://astro.build) para usar durante el viaje (Tokyo, Osaka, Nara y Kyoto, 21 OCT – 2 NOV 2026). Funciona sin conexión una vez guardada en el móvil.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Portada: ruta, día a día, kit de emergencia (hoteles), modo sin conexión |
| `/tokyo-llegada/` | Fase 1 · 21 OCT · Haneda → hotel → Tokyo Station → Shinkansen → Shin-Osaka |
| `/osaka/` | Fase 2 · 21–25 OCT · Hommachi, planes A–D (Nara incluida), salida a Kyoto |
| `/kyoto/` | Fase 3 · 25–28 OCT · Higashiyama, Arashiyama, Fushimi Inari, Shinkansen a Tokyo |
| `/tokyo/` | Fase 4 · 28 OCT – 2 NOV · Tokyo por días y vuelta por Haneda |
| `/creditos/` | Autoría y licencia de las fotos |

Todas las páginas incluyen el **protocolo sin gluten** (tarjeta en japonés) y las **frases de ayuda** para taxi y estación. El botón rojo **🆘 Ayuda** está siempre visible.

## Requisitos

- Node.js **22.12 o superior** (`node -v`)

## Arrancar en local

```bash
npm install
npm run dev
```

Abre la dirección que indique la consola (por defecto `http://localhost:4321/japon-2026/`).

## Publicar en GitHub Pages

1. En `astro.config.mjs` cambia `USUARIO` por tu usuario de GitHub. Si el repositorio no se llama `japon-2026`, cambia también `base`.
2. Crea el repositorio y sube el código a la rama `main`.
3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Cada `push` a `main` publica la web con `.github/workflows/deploy.yml`.

La web queda en `https://USUARIO.github.io/japon-2026/`.

## Publicar en Netlify (alternativa)

1. En Netlify: **Add new site → Import an existing project** y elige el repositorio.
2. No hay que configurar nada: `netlify.toml` ya indica el comando (`npm run build`), la carpeta (`dist`), Node 22 y que la web va en la raíz (`BASE_PATH=/`).

## Probar en el móvil antes del viaje

1. Abrir la web publicada con wifi y entrar en la portada.
2. Bajar a **Guardar la guía en el móvil** y esperar a que ponga ✅ (84 fotos).
3. Añadirla a la pantalla de inicio (Safari: Compartir → Añadir a pantalla de inicio · Chrome: menú → Instalar app).
4. Poner el móvil en **modo avión** y abrir las cuatro fases: todo debe verse, fotos incluidas.
5. Si se cambia algo de la web después, abrirla una vez con conexión para que se actualice.

## Dónde se cambia cada cosa

| Qué | Fichero |
|---|---|
| Hoteles, fechas, relevos entre fases | `src/data/viaje.ts` |
| Colores y nombres de las líneas | `src/data/lineas.ts` |
| Frases comunes (estación, taxi, básicas) | `src/data/frases.ts` |
| Tarjeta celíaca, reglas y frases de comida | `src/data/celiaco.ts` |
| Fotos (autor, licencia, tamaño) | `src/data/fotos.json` + `public/img/` |
| Contenido de cada fase | `src/pages/*.astro` |
| Estilos | `src/styles/global.css` |

## Modo sin conexión

`src/pages/sw.js.ts` genera el *service worker* en cada build con la lista de páginas y fotos. Al abrir la web por primera vez se guardan las páginas y, en segundo plano, todas las fotos. En la portada hay un botón para comprobarlo o completarlo.
