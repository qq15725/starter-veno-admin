// 导入工具函数
import api from '@/api'

// 导入组合
import { ApiKey } from '@/composables'

// 导入类型定义
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = app => {
  app.provide(ApiKey, api)
}