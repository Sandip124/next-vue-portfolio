import { useStorage } from '@vueuse/core'
import LocalStorageKeyConstants from '@/constants/localStorageKeyConstants'
import LocalStorageSerializer from '@/stores/localStorageSerializer'
import type { UserJsonConfig } from '@/services/types/jsonConfigTypes'

export async function getConfig(): Promise<UserJsonConfig | null> {
  const config = useStorage(LocalStorageKeyConstants.JsonConfigStorageKey, {
    serverUrl: '',
    isDevelopment: false,
  }, localStorage, { mergeDefaults: true, serializer: LocalStorageSerializer })

  if (config.value.serverUrl)
    return config.value

  try {
    config.value = await fetch('/appconfig.json')
      .then(res => res.json())
    return config.value
  }
  catch (error) {
    console.error('Error fetching config from server:', error)
    return null
  }
}
