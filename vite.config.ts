// Utils
import path from 'path'
import { defineConfig } from 'vite'

// Plugins
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import { viteMockServe as Mock } from 'vite-plugin-mock'

// Veno UI Plugins
import { VenoUiResolver } from 'veno-ui'
import Markdown from '@veno-ui/vite-plugin-markdown'
import Iconify from 'vite-plugin-iconify'

// Types
import type { PageOptions } from 'vite-plugin-pages'

// 全局配置
import config from './config'

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
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
          config.demos && { dir: 'demos', baseRoute: 'demos' },
          config.docs && { dir: 'docs', baseRoute: 'docs' },
        ].filter(Boolean) as PageOptions[],
        extensions: ['vue', 'md'],
      }),

      // 自动注册布局
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts({
        layoutsDirs: 'src/layouts',
        defaultLayout: 'default',
      }),

      // 自动注册组件
      // https://github.com/antfu/unplugin-vue-components
      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          VenoUiResolver(),
        ],
        dts: 'src/components.d.ts',
      }),

      // 自动注册图标
      // http://github.com/qq15725/vite-plugin-iconify
      Iconify({
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        replaceableProps: [
          'veno-ui',
        ],
        iconifyLoaderOptions: {
          autoInstall: true,
        },
      }),

      // markdown 文件解析支持
      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown
      Markdown(),

      // 模拟接口数据
      // https://github.com/vbenjs/vite-plugin-mock
      Mock({
        ignore: /index\.ts$/,
        mockPath: 'mocks',
        localEnabled: env.command === 'serve',
        prodEnabled: env.command !== 'serve',
        injectCode: `
          import { setupProdMockServer } from '../mocks/index'
          setupProdMockServer()
        `,
      }),
    ]
  }
})
