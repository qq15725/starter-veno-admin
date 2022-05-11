/**
 * 导出后台工程需要的全局配置（涵盖构建时需要的配置）
 */
export default defineConfig({
  docs: true,
  demos: true,
})

/**
 * 类型定义帮助函数
 *
 * @param config
 */
function defineConfig(config: Config): Config {
  return config
}

interface Config {
  /**
   * 是否启用文档
   */
  docs: boolean

  /**
   * 是否启用演示
   */
  demos: boolean
}

