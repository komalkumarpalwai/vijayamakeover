import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/komal_solution/', // GitHub Pages base path
  resolve: {
    alias: {
      // Remove this unnecessary alias (Vite handles react-refresh automatically)
      // 'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove lenis from external (unless you're loading it via CDN)
      // external: ['lenis'],
    },
  },
  server: {
    // Update allowedHosts configuration
    allowedHosts: [
      'komal-solution.onrender.com',
      'localhost' // Add localhost for local development
    ]
  },
});