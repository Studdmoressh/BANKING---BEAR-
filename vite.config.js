import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages: set base to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/BANKING---BEAR-/',
})
