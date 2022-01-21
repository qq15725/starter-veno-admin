// 加载并返回当前目录下所有 svg 后缀文件

const modules = import.meta.globEager('./*.svg')

export default Object.keys(modules).reduce((svgs, path) => ({
  ...svgs,
  [path.match(/(\w+?)\.svg$/)![1]]: modules[path].default
}), {})