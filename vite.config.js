import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// change "studmoressh" and "BANKING---BEAR" to your repo details if deploying with gh-pages
export default defineConfig({
  plugins: [react()],
  base: '/banking-bear/'
})
