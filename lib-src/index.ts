import type { App } from 'vue'
import V3Button1 from './Button1/index.vue'
import V3Button2 from './Button2/index'

V3Button1.install = function (instance: App) {
  instance.component(V3Button1.name, V3Button1)
}

V3Button2.install = function (instance: App) {
  instance.component(V3Button2.name, V3Button2)
}

export {
  V3Button1,
  V3Button2
}
