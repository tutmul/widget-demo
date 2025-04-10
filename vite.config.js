import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/embed.js'),
      name: 'ChatWidget',
      fileName: () => 'chat-widget.js',
      formats: ['iife'], // Immediately Invoked Function Expression
    },
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
