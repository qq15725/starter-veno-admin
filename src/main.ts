// 导入工具函数
import { createApp } from 'vue'

// 导入入口
import App from './App.vue'

// 导入插件
import { useVenoUi } from './plugins/veno-ui'
import { usePinia } from './plugins/pinia'
import { useRouter } from './plugins/router'

// 应用实例化
const app = createApp(App)

// 挂载插件
useVenoUi(app)
usePinia(app)
useRouter(app)

// 挂载到 DOM 容器
app.mount('#app')
