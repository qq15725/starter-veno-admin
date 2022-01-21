// 导入样式
import 'veno-ui/styles'

// 导入工具函数
import { createVenoUi } from 'veno-ui'

// 导入类型定义
import type { UsePlugin } from '@/types'

export const useVenoUi: UsePlugin = app => {
  const venoUi = createVenoUi({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            background: '#FFF',
            surface: '#FFF',
            primary: '#0969da',
            secondary: '#F2F3F5',
            'on-secondary': '#20262d',
            success: '#00B42A',
            warning: '#ff7d00',
            error: '#F53F3F',
            info: '#2080F0',
          },
          variables: {}
        }
      }
    }
  })

  app.use(venoUi)
}
