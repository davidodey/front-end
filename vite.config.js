import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resume/', // Set the base URL to match your deployment route
  server: {
    proxy: {
      '/server': {
        target: 'http://localhost:5001', // URL of your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/server/, ''), // Removes `/api` prefix if needed
      },
    },
  },
});