import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carnets.emilietreynetgestalt.com',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
