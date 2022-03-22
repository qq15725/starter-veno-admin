// Utils
import { inject } from 'vue'

// Types
import type { InjectionKey } from 'vue'
import type { AxiosInstance } from 'axios'

// Symbols
export const HttpKey: InjectionKey<AxiosInstance> = Symbol.for('app:http')

export function useHttp () {
  const http = inject(HttpKey)
  if (!http) throw new Error(`[App] Could not find http instance`)
  return http
}
