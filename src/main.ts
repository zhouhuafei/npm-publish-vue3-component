import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
// 开发阶段 - 调试 - 会自动引入css
import { V3Button1, V3Button2 } from '../lib-src'
// 生产阶段 - 调试 - 需手动引入css
// import '../lib/index.css'
// import { V3Button1, V3Button2 } from '../lib/index.es.js'

const app = createApp(App)
app.use(ElementPlus)
app.use(V3Button1)
app.use(V3Button2)
app.mount('#app')
