## 源码阅读

推荐先从 `vite.config.ts` 开始阅读。

## 使用的特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next) 、[Vite 2](https://github.com/vitejs/vite) 、 [Veno UI](https://github.com/qq15725/veno-ui) 、[ESBuild](https://github.com/evanw/esbuild)
- 🗂 [基于文件结构自动生成路由](https://github.com/qq15725/veno-admin/blob/master/src/pages)
- 👣 [组件按需自动注册](https://github.com/qq15725/veno-admin/blob/master/src/components)
- 🍍 [使用 Pinia 管理状态](https://pinia.esm.dev) 
- 📑 [布局系统](https://github.com/qq15725/veno-admin/blob/master/src/layouts)
- 🗒 [Markdown 文件解析](https://github.com/qq15725/veno-ui/tree/master/packages/vite-plugin-markdown)
- 🐔 [Mock 接口](https://github.com/vbenjs/vite-plugin-mock)
- 🦾 TypeScript
- ☁️ 部署到 Netlify

## 现在就试试

> Veno Admin 需要 Node >= 14

### 使用 GitHub 模板

[从这个 GitHub 模板创建一个仓库。](https://github.com/qq15725/veno-admin/generate)

### 或者克隆到本地。

无 git 历史记录。

```shell
npx degit qq15725/veno-admin my-admin

cd my-admin

# 如果你没有安装 pnpm，运行：npm install -g pnpm
pnpm i
```

## 使用

### 运行开发环境

只需运行并访问 http://localhost:3333

```bash
pnpm run dev
```

### 打包应用

```bash
pnpm run build
```