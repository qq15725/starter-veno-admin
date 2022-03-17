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
        $children: [
          { title: '主控台', to: '/dashboard/console' },
          { title: '工作台', to: '/dashboard/workplace' },
        ]
      },
      { prependIcon: '$database', title: '数据表格', to: '/demos/table' },
      { prependIcon: '$abort', title: '关于', to: '/demos/abort' },
    ]
  }
] as MockMethod[]