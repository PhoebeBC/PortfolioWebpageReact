import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build" // tells vite to output the build to a folder called docs
  },
  base: '/' // tells vite to request dependencies from the root domain
})
