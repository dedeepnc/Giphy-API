import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',    
    setupFiles: ['./src/test/setup.js'],
    css: true, // Set to false if your tests don't rely on CSS
  },
});
