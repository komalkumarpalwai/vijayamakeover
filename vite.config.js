import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Vijayaa-Makeovers_web/', // GitHub Pages URL
  resolve: {
    alias: {
      'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['lenis'], // Treat lenis as an external module
    },
  },
  server: {
    allowedHosts: ['komal-solution.onrender.com'],
  },
});
