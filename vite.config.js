import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// GitHub Pages serves this repo at https://<user>.github.io/hop77_io/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/hop77_io/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}));
