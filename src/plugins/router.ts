// 导入工具函数
import { createRouter, createWebHashHistory } from 'vue-router'
import { usePermission } from '@/permission'
// 由 vite-plugin-pages 生成的页面
import generatedRoutes from 'virtual:generated-pages'
// 由 vite-plugin-vue-layouts 生成的布局
import { setupLayouts } from 'virtual:generated-layouts'

// 导入类型定义
import type { InstallPlugin } from '@/types'

export const install: InstallPlugin = app => {
  // 创建路由器实例
  const router = createRouter({
    // 默认用 hash 方便部署，可自行修改成 createWebHistory 模式。
    history: createWebHashHistory(),
    // 路由
    routes: [
      // 重定向
      { path: '/', redirect: () => ({ path: '/dashboard/console' }) },
      // 设置布局
      ...setupLayouts(generatedRoutes)
    ]
  })

  // 注册权限相关逻辑
  usePermission(router)

  app.use(router)
}