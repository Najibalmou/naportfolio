import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // If EmailJs needs to be treated as an external dependency, add it here
      external: ['emailjs'],
    },
  },
})
