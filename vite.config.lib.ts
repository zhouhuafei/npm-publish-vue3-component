import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    outDir: './lib',
    emptyOutDir: true,
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, './lib-src/index.ts'),
      name: 'V3Button',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        },
        // 控制静态资源（包括CSS）的输出文件名
        assetFileNames: 'index.css'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './lib-src',
      outDir: './lib',
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
