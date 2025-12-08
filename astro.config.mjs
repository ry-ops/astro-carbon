// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ry-ops.dev',
  vite: {
    plugins: [tailwindcss()],
    // CSS optimization settings
    css: {
      // Disable source maps in production to reduce CSS size
      devSourcemap: false,
    },
    // Build optimizations for CSS
    build: {
      // Improve CSS chunk handling for better caching
      cssCodeSplit: true,
      // Optimize output chunk naming
      rollupOptions: {
        output: {
          // Ensure CSS assets are properly named with hashes
          assetFileNames: (assetInfo) => {
            if (/\.css$/.test(assetInfo.name ?? '')) {
              return '_astro/[name]-[hash][extname]';
            }
            return '_astro/[name]-[hash][extname]';
          },
        },
      },
    },
  },
  // Build configuration for better SEO and performance
  build: {
    // Inline critical CSS automatically
    inlineStylesheets: 'auto',
  },
  // Compress HTML for better performance
  compressHTML: true,
  // Image optimization configuration
  image: {
    // Enable image optimization with Sharp
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      }
    },
    // Set default image formats
    remotePatterns: [],
  },
});