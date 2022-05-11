// Utils
import { createPinia } from 'pinia'

// Types
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = app => {
  const pinia = createPinia()

  app.use(pinia)
}
