import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',                // ✅ allows LAN & external access
    allowedHosts: ['.ngrok-free.dev'], // ✅ allows all ngrok tunnels
  },
});
