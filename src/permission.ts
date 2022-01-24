// 导入工具函数
import { useAppStore } from '@/stores/app'
import { useAuthStore } from '@/stores/auth'

// 导入类型定义
import type { Router } from 'vue-router'

// 处理权限管理相关
export function usePermission (router: Router) {
  const app = useAppStore()
  const auth = useAuthStore()

  router.beforeEach(async (to, from, next) => {
    // 处理需要身份验证的部分
    if (to.meta.requiresAuth !== false) {
      // 未登录跳转登录
      if (!auth.token) return next('/auth/login')

      // 菜单初始化 (菜单为空时刷新菜单)
      if (!app.menus) app.refreshMenus()
    }

    next()
  })
}