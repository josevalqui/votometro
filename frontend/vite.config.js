import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/votometro/',  // Replace with your GitHub repository name if needed
  server: {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Define manual chunks to separate vendor code
        manualChunks: {
          vendor: ['react', 'react-dom'], // Add other libraries as needed
        },
      },
    },
    // Increase the warning limit for chunk sizes (adjust the value as needed)
    chunkSizeWarningLimit: 600,
  },
});
