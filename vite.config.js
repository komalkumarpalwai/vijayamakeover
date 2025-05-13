import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Expose on all network interfaces
    // port: process.env.PORT || 5173, // Uncomment if needed for Render
    allowedHosts: 'all' // Simplified version to allow all hosts
  }
});