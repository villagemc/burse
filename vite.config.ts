import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: './',
  plugins: [
    svgr(),
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: [
      {
        find: '@', replacement: '/src'
      }
    ]
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({ overrideBrowserslist: ["> 0%"] })
      ]
    }
  }
});