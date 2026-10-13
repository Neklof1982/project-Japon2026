// @ts-check
import { defineConfig } from 'astro/config';

// Netlify pasa URL (dominio de la web) y netlify.toml fija BASE_PATH=/.
const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE_URL ?? process.env.URL;

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    // CSS dentro de cada página: así funciona sin conexión sin depender de ficheros con hash.
    inlineStylesheets: 'always',
  },
});
