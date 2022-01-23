// 导入工具函数
import { createApp } from 'vue'

// 导入入口
import App from '@/App.vue'

// 应用实例化
const app = createApp(App)

// 安装所有插件
Object.values(import.meta.globEager('./plugins/*.ts'))
  .forEach(i => i.install?.(app))

// 挂载到 DOM 容器
app.mount('#app')
