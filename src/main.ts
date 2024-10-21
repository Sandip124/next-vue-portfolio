import '@/assets/css/base.css'
import App from '@/App.vue'

const app = createApp(App)

Object.values(import.meta.glob<any>('./modules/*.ts', { eager: true }))
  .forEach(i => i.install?.(app))

app.mount('#app')
