import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the production build opens from any path.
export default defineConfig({
  base: './',
  plugins: [vue(), tailwindcss()],
  build: {
    // Keep every image a separate hashed file so lazy-loading works and the
    // JS bundle stays lean — no base64 inlining.
    assetsInlineLimit: 0,
  },
})
