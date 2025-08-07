import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Устанавливаю базовый путь для локальной разработки
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3001
  }
});
