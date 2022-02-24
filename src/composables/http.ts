// 导入工具函数
import { inject } from 'vue'

// 导入类型定义
import type { InjectionKey } from 'vue'
import type { AxiosInstance } from 'axios'

// 定义 http 提供者的唯一 key
export const HttpKey: InjectionKey<AxiosInstance> = Symbol.for('app:http')

// 使用 http
export function useHttp () {
  const http = inject(HttpKey)
  if (!http) throw new Error(`[App] Could not find http instance`)
  return http
}
