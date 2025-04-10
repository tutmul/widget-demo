import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/embed.js'),
      name: 'ChatWidget',
      fileName: () => 'chat-widget.js',
      formats: ['iife']
    },
    rollupOptions: {
      external: [],
      output: {
        assetFileNames: 'assets/[name].[ext]' // 🔧 ensures CSS is included
      }
    },
    cssCodeSplit: false, // 🔥 This is the key: disables separate CSS output
  }
});
