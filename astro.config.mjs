// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // If this is your user/organization site (repo named <username>.github.io),
  // use the root base (`'/'`). If this is a project site (served at
  // https://<username>.github.io/<repo>/), change `base` to `'/<repo>/'`.
  site: 'https://marisanabria.github.io',
  base: '/',
  integrations: [mdx(), sitemap(), ],

  vite: {
    plugins: [tailwindcss()],
  },
});
