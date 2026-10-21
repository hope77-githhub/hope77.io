import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 상대 경로 지원 (GitHub Pages 호환)
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});
