// Styles
import 'veno-ui/styles'

// Utils
import { createVeno } from 'veno-ui'
import * as directives from 'veno-ui/directives'
import * as providers from 'veno-ui/providers'

// Icons
import type { InstallPlugin } from '@/types'
import icons from '@/icons'

// Types

export const install: InstallPlugin = app => {
  const veno = createVeno({
    // 注册指令
    directives,
    // 注册提供商
    providers,
    // 自定义风格色
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            'background': '#FFF',
            'surface': '#FFF',
            'primary': '#0969DA',
            'secondary': '#F2F3F5',
            'on-secondary': '#20262D',
            'success': '#00B42A',
            'warning': '#FF7D00',
            'error': '#F53F3F',
            'info': '#2080F0',
          },
          variables: {},
        },
      },
    },
    // 自定义预设图标
    icons: {
      aliases: icons,
    },
  })

  app.use(veno)
}
