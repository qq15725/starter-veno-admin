// Types
import type { MockMethod } from 'vite-plugin-mock'

/**
 * 菜单相关模拟接口
 */
export default <MockMethod[]>([
  // 获取菜单列表
  {
    url: '/menus',
    method: 'get',
    response: () => ([
      {
        prependIcon: '$dashboard',
        title: 'dashboard',
        $children: [
          { title: '主控台', to: '/dashboard/console' },
          { title: '工作台', to: '/dashboard/workplace' },
        ],
      },
      {
        prependIcon: '$table',
        title: '数据表格',
        $children: [
          { title: 'Laravel 数据源', to: '/demos/table/for-laravel-api' },
        ],
      },
      { prependIcon: '$about', title: '关于', to: '/docs/abort' },
    ]),
  },
])
