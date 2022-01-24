// 导入工具函数
import { http } from '@/plugins/http'

// 登录
export function login (username: string, password: string) {
  return http.post('/token', { username, password }) as Promise<{ token: string }>
}