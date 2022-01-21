// 导入工具函数
import { createPinia } from 'pinia'

// 导入类型定义
import type { UsePlugin } from '@/types'

export const pinia = createPinia()

export const usePinia: UsePlugin = app => {
  app.use(pinia)
}
