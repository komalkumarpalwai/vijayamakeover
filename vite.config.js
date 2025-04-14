import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/komal_solution/', // Root URL for your GitHub Pages repository
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
    // You can use 'all' to allow any hosts or specify multiple allowed hosts as an array
    allowedHosts: ['komal-solution.onrender.com'],
  },
});
