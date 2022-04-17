import { createApp } from 'vue'
import App from './App.vue'
import {
  V3Button1,
  V3Button2
} from '../lib-src'

const instance = createApp(App)
instance.use(V3Button1)
instance.use(V3Button2)
instance.mount('#app')
