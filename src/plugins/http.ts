// Utils
import axios from 'axios'

// Composables
import { HttpKey } from '@/composables'

// Types
import type { InstallPlugin } from '@/types'

export const http = axios.create()

// 响应结果拦截器
http.interceptors.response.use(rep => rep.data)

export const install: InstallPlugin = app => {
  app.provide(HttpKey, http)
}