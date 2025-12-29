import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://test.cafelamees.co.uk',
  //       changeOrigin: true,
  //       secure: false, // ignores SSL issues if any
  //     }
  //   }
  // }
})
