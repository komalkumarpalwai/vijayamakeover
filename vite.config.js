import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose on all network interfaces
    allowedHosts: 'all', // Simplified version to allow all hosts
  },
  preview: {
    allowedHosts: ['vijayamakeover.onrender.com'], // Allow this host
  }
});
