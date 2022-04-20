import type { App } from 'vue'

export function withInstall (Component: any) {
  Component.install = function (instance: App) {
    instance.component(Component.name, Component)
  }
  return Component
}
