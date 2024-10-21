import { getConfig } from '@/services/jsonConfigService'
import type { UserJsonConfig } from '@/services/types/jsonConfigTypes'

let config: UserJsonConfig | null = null
export default async function (): Promise<UserJsonConfig | null> {
  if (config === null)
    config = await getConfig()
  return config
}
