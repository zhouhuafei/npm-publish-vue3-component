import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode, command }) => {
  console.log('mode：', mode)
  console.log('command：', command)
  const env = loadEnv(mode, process.cwd())
  const NODE_ENV = process.env.NODE_ENV
  console.log('process.env.NODE_ENV：', NODE_ENV)
  const npm_lifecycle_event = process.env.npm_lifecycle_event
  console.log('process.env.npm_lifecycle_event：', npm_lifecycle_event)
  let base = env.VITE_WEB_ROUTER_BASE_URL
  if (NODE_ENV === 'production' && npm_lifecycle_event !== 'preview') base = env.VITE_OSS_URL
  console.log('base：', base)

  return {
    server: {
      port: 5551
    },
    plugins: [
      vue(),
      vueJsx()
      // vueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
