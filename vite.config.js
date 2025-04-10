import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/embed.js'),
      name: 'ChatWidget',
      fileName: () => 'chat-widget.js',
      formats: ['iife'], // Self-executing script
    },
  },
})
