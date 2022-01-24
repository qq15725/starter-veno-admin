// 导入工具函数
import { ref } from 'vue'
import { defineStore } from 'pinia'

// 导入接口
import { login } from '@/api/auth'

const tokenKey = 'token'
const userKey = 'user'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(localStorage.getItem(tokenKey))

  const rawUser = localStorage.getItem(userKey)
  const user = ref(rawUser ? JSON.parse(rawUser) : {
    // 用户名
    username: null as string | null,
  })

  return {
    // 登录令牌
    token,
    // 用户信息
    user,
    // 登录
    login: async (username: string, password: string) => {
      const res = await login(username, password)
      // 保存登录态
      localStorage.setItem(tokenKey, token.value = res.token)
      // 保存用户信息
      user.value.username = username
      localStorage.setItem(userKey, JSON.stringify(user.value))
    },
    // 退出登录
    logout: () => {
      token.value = null
      localStorage.removeItem(tokenKey)
      localStorage.removeItem(userKey)
    }
  }
})
