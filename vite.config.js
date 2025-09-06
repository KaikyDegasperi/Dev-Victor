import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite' 

// IMPORTANTe: base = nome do repositório do Pages
export default defineConfig({
  plugins: [react(), tailwind()],
  base: '/Dev-Victor/',
})