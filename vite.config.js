import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// GitHub Pages serves this repo at https://<user>.github.io/hope77.io/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/hope77.io/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}));
