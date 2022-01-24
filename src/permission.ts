// 导入工具函数
import { useAppStore } from '@/stores/app'

// 导入类型定义
import type { Router } from 'vue-router'

// 处理权限管理相关
export function usePermission (router: Router) {
  const app = useAppStore()

  router.beforeEach(async (to, from, next) => {
    // 菜单初始化 (菜单为空时刷新菜单)
    if (app.menus === null) app.refreshMenus()

    next()
  })
}