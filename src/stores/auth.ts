// 导入工具函数
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 导入接口
import { login } from '@/api/auth'

export const useAuthStore = defineStore('auth', () => {
  const token = ref()

  const user = ref({
    // 账号
    username: null,
    // 头像
    avatar: null,
    // 名字
    name: null,
  })

  return {
    // 登录令牌
    token,
    // 用户信息
    user,
    // 用户登录
    login: async (username: string, password: string, captcha: string) => {
      token.value = await login(username, password, captcha)
    }
  }
})
