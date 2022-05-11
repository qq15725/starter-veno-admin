// Utils
import axios from 'axios'

// Composables
import type { InstallPlugin } from '@/types'
import { HttpKey } from '@/composables'

// Types

export const http = axios.create()

// 响应结果拦截器
http.interceptors.response.use(rep => rep.data)

export const install: InstallPlugin = app => {
  app.provide(HttpKey, http)
}
