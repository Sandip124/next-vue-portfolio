import { VueQueryPlugin } from '@tanstack/vue-query'
import type { App } from 'vue'

export function install(app: App) {
  app.use(VueQueryPlugin)
}
