import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/komal_solution/', // GitHub Pages base path
  resolve: {
    alias: {
      // Remove unnecessary alias (Vite handles react-refresh automatically)
      // 'react-refresh/babel': path.resolve('./node_modules/react-refresh/babel.js'),
    },
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      // optional cleanup if you're not using external CDN packages
      // external: ['lenis'],
    },
  },
  server: {
    host: '0.0.0.0',              // Expose on all network interfaces
    //port: process.env.PORT || 5173, // Use Render's dynamic port
    allowedHosts: [
      'komal-solution.onrender.com',
      'localhost', // Allow localhost for local development
    ],
  },
});
