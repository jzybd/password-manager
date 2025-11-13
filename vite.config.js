import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/password-manager/', 
  build: {
    outDir: 'docs'
  },
  publicDir: 'public'
});
