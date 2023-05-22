// Utils
import path from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// Plugins
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe as Mock } from 'vite-plugin-mock'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Unocss from 'unocss/vite'

// Veno UI Plugins
import { VenoUiResolver } from 'veno-ui'
import Markdown from '@veno-ui/vite-plugin-markdown'

// 全局配置
import config from './config'

// Types
import type { PageOptions } from 'vite-plugin-pages'

// 解析路径成绝对路径
const resolve = (...args: string[]) => path.resolve(__dirname, ...args)

// 配置项文档
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    resolve: {
      alias: [
        { find: '@', replacement: resolve('./src') },
      ],
    },
    plugins: [
      splitVendorChunkPlugin(),

      // https://github.com/antfu/unocss
      Unocss(),

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

      // 自动导入
      // https://github.com/antfu/unplugin-auto-import
      AutoImport({
        imports: [
          'vue',
          'vue-router',
        ],
        dirs: [
          './src/composables',
        ],
        vueTemplate: true,
        dts: 'src/auto-imports.d.ts',
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
          IconsResolver(),
        ],
        dts: 'src/components.d.ts',
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        compiler: 'vue3',
      }),

      // markdown 文件解析支持
      // https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown
      Markdown(),

      // 模拟接口数据
      // https://github.com/vbenjs/vite-plugin-mock
      Mock({
        ignore: /index\.ts$/,
        mockPath: 'mocks',
      }),
    ],
  }
})
