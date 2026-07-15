import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: './docs',
  site: 'https://dc402.org',
  build: {
    assets: '_astro',
  },
});
