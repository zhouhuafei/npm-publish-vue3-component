import type { App } from 'vue'
import Component from './Component.vue'

Component.install = function (instance: App) {
  instance.component(Component.name, Component)
}

export default Component as any
