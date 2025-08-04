import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HEEO-presentation/',
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3002
  }
});
