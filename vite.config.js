import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/COMP6210-Assignment-1',
  plugins: [react()]
})
