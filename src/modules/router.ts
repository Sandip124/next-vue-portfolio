import type { App } from 'vue'
import router from '@/router'

export function install(app: App) {
  app.use(router)
}
