import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import HelloWorld1 from '@/components/HelloWorld1/index.vue'
import HelloWorld2 from '@/components/HelloWorld2/index.tsx'
import * as V3Components from '../lib-src'

const app = createApp(App)
app.use(ElementPlus, { size: 'default', locale: zhCn })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) app.component(key, component)
app.component('HelloWorld1', HelloWorld1)
app.component('HelloWorld2', HelloWorld2)
for (const [key, component] of Object.entries(V3Components)) app.component(key, component)
app.mount('#app')
