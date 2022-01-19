import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from "vite-plugin-pages";
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    pages(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
