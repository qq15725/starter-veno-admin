// 导入工具函数
import { inject } from 'vue'

// 导入类型定义
import type { Api } from '@/api'
import type { InjectionKey } from 'vue'

// 定义 Api 提供者的唯一 key
export const ApiKey: InjectionKey<Api> = Symbol.for('app:api')

// 使用 Api
export function useApi () {
  const provider = inject(ApiKey)
  if (!provider) {
    throw new Error(`[App] Could not find http instance`)
  }
  return provider
}
