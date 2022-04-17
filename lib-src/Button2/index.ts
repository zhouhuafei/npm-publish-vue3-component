import type { App } from 'vue'
import Component from './Component'

Component.install = function (instance: App) {
  instance.component(Component.name, Component)
}

export default Component
