import { MockMethod } from 'vite-plugin-mock'

export default [
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
      { prependIcon: '$data', title: '数据表格', to: '/table' },
      { prependIcon: 'mdi-account-box-outline', title: '关于', to: '/abort' },
    ]
  }
] as MockMethod[]