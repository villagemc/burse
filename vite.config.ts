import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import autoprefixer from 'autoprefixer';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: './',
  plugins: [
    svgr(),
    react(),
    TanStackRouterVite(),
    viteStaticCopy({
      targets: [
        {
          src: '404.html', dest: ''
        }
      ]
    })
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