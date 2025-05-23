// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SoftwareCell/', // <--- AÑADIDO
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});