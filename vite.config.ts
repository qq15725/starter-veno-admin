// 导入工具函数
import path from 'path'
import { defineConfig } from 'vite'

// 导入插件
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import Markdown from '@veno-ui/vite-plugin-markdown'
import Svg from '@veno-ui/vite-plugin-svg'
import { viteMockServe as Mock } from 'vite-plugin-mock'

// 导入类型定义
import type { ComponentResolver } from 'unplugin-vue-components'

// 用于自动注册组件的 Veno UI 组件解析器
function VenoUiResolver (): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (!name.match(/^Ve[A-Z]/)) return
      return {
        importName: name.replace('Ve', ''),
        path: 'veno-ui/components'
      }
    }
  }
}

// 解析路径成绝对路径
const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

// 配置项文档
// https://vitejs.dev/config/
export default defineConfig(env => {
  return {
    css: { preprocessorOptions: { scss: { charset: false } } },
    resolve: {
      alias: [
        { find: '@', replacement: resolve('./src') },
      ]
    },
    plugins: [
      // plugin-vue
      Vue({
        include: [/\.vue$/, /\.md$/],
      }),

      // 自动注册页面到路由
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue', 'md']
      }),

      // 自动注册布局
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDir: 'src/layouts',
        defaultLayout: 'default'
      }),

      // 自动注册组件
      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VenoUiResolver(),
          // 自动导入图标
          // https://github.com/antfu/unplugin-icons
          IconsResolver({
            prefix: false,
          })
        ],
        dts: 'src/components.d.ts',
      }),

      // 自动注册图标
      // https://github.com/antfu/unplugin-icons
      Icons(),

      // markdown 文件解析支持
      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown
      Markdown(),

      // svg 文件解析支持
      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-svg
      Svg(),

      // 模拟接口数据
      // https://github.com/vbenjs/vite-plugin-mock
      Mock({
        ignore: /index\.ts$/,
        mockPath: 'mock',
        localEnabled: env.command === 'serve',
        prodEnabled: env.command !== 'serve',
        injectCode: `
          import { setupProdMockServer } from '../mock/index'
          setupProdMockServer()
        `,
      }),
    ]
  }
})
