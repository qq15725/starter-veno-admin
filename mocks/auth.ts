// Types
import type { MockMethod } from 'vite-plugin-mock'

/**
 * 身份验证相关模拟接口
 */
export default <MockMethod[]>([
  // 登录
  {
    url: '/token',
    method: 'post',
    response: {
      token: '__TOKEN__',
    }
  }
])