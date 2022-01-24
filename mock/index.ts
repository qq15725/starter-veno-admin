import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 设置生产环境接口模拟
export function setupProdMockServer () {
  createProdMockServer(
    // 检索出所有子 mock 文件
    Object.values(import.meta.globEager('./**/*.ts'))
      .flatMap(i => i.default)
  )
}