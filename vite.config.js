import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,//sirve para cambiar al puerto 3000
    open: true //sirve para abrir directo el navegador,sin necesidad de copiar el link
  }
})
