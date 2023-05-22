// Utils
import { createProdMockServer } from 'vite-plugin-mock/client'

/**
 * 设置生产环境的接口模拟服务
 */
export function setupProdMockServer() {
  createProdMockServer(
    // 注册当前目录下所有 ts 文件
    Object.values(import.meta.glob('./**/*.ts', { eager: true }))
      .flatMap((i: any) => i.default),
  )
}
