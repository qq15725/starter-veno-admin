// 导入工具函数
import axios from 'axios'

// 导入组合
import { HttpKey } from '@/composables'

// 导入类型定义
import type { InstallPlugin } from '@/types'

export const http = axios.create()

// 响应结果拦截器
http.interceptors.response.use(rep => rep.data)

export const install: InstallPlugin = app => {
  app.provide(HttpKey, http)
}