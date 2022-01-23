import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 检索出所有子 mock 文件
const mocks = Object.values(import.meta.globEager('./**/*.ts')).flatMap(i => i.default)

// 设置生产环境数据模型
export function setupProdMockServer () {
  createProdMockServer(mocks)
}