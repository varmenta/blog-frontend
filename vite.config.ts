import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import million from 'million/compiler'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [million.vite({ auto: true }), react()],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
})
