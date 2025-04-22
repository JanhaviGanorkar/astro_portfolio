// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://janhaviganorkar.com',
  image: {
    domains: ['raw.githubusercontent.com', 'github.githubassets.com'],
    remotePatterns: [
      { protocol: "https" }
    ],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  prefetch: {
    defaultStrategy: 'viewport'
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
  integrations: [
    {
      name: 'astro-robots-txt',
      options: {
        host: 'https://janhaviganorkar.com'
      }
    }
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/image', 'sharp']
    }
  }
});
