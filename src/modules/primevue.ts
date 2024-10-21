import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import Tooltip from 'primevue/tooltip'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import type { App } from 'vue'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

const MyPreset = definePreset(Aura, {
})

export function install(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: 'false',
      },
    },
    inputStyle: 'filled',
  })
  app.use(ToastService)
  app.use(ConfirmationService)
  // add directives
  app.directive('tooltip', Tooltip)
}
