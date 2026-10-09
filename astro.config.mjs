// @ts-check
import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH ?? '/project-Japon2026';
const site = process.env.SITE_URL ?? process.env.URL ?? 'https://Neklof1982.github.io';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    // CSS dentro de cada página: así funciona sin conexión sin depender de ficheros con hash.
    inlineStylesheets: 'always',
  },
});
