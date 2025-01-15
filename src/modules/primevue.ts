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
  semantic: {
    primary: {
      0: '#fff',
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}',
    },
    colorScheme: {
      light: {
        surface: {
          0: '{slate.50}',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{zinc.50}',
          100: '{zinc.100}',
          200: '{zinc.200}',
          300: '{zinc.300}',
          400: '{zinc.400}',
          500: '{zinc.500}',
          600: '{zinc.600}',
          700: '{zinc.700}',
          800: '{zinc.800}',
          900: '{zinc.900}',
          950: '{zinc.950}',
        },
      },
    },
  },
})

export function install(app: App) {
  app.use(PrimeVue, {
    theme: {
      preset: MyPreset,
      options: {
        darkModeSelector: 'false',
        prefix: '',
      },
    },
    inputStyle: 'filled',
  })
  app.use(ToastService)
  app.use(ConfirmationService)
  // add directives
  app.directive('tooltip', Tooltip)
}
