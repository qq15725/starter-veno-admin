// 导入类型定义
import type { MockMethod } from 'vite-plugin-mock'

// 菜单相关模拟接口
export default [
  // 获取菜单列表
  {
    url: '/menus',
    method: 'get',
    response: [
      {
        prependIcon: '$dashboard',
        title: 'dashboard',
        children: [
          { title: '主控台', to: '/dashboard/console' },
          { title: '工作台', to: '/dashboard/workplace' },
        ]
      },
      {
        prependIcon: 'mdi-account-settings-outline',
        title: '系统设置',
        children: [
          { title: '管理员', to: '/system/manager' },
        ]
      },
      { prependIcon: 'mdi-account-box-outline', title: '关于', to: '/abort' },
    ]
  }
] as MockMethod[]