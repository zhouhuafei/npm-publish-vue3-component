import { createApp } from 'vue'
import App from './App.vue'
import {
  V3Button1,
  V3Button2
} from '../lib-src'

const instance = createApp(App)
instance.use(V3Button1 as any)
instance.use(V3Button2 as any)
instance.mount('#app')
