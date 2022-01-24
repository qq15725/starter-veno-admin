// 导入类型定义
import type { MockMethod } from 'vite-plugin-mock'

// 身份验证相关模拟接口
export default [
  // 登录
  {
    url: '/token',
    method: 'post',
    response: {
      token: '__TOKEN__',
    }
  }
] as MockMethod[]