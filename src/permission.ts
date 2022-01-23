// 导入工具函数
import { useAppStore } from '@/stores/app'

// 导入类型定义
import type { App } from 'vue'
import type { Router } from 'vue-router'

export function usePermission (app: App, router: Router) {
  const appStore = useAppStore()

  router.beforeEach(async (to, from, next) => {
    // 初始化菜单
    if (appStore.menus === null) appStore.fetchMenus()

    next()
  })
}