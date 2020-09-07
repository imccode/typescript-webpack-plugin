/**
 * typescript-webpack-plugin 插件的可配参数
 */
export interface TypescriptWebpackPluginOptions {
  /**
   * 启用缓存，指定缓存路径
   *
   * 默认development环境启用
   */
  cacheDirectory?: string | boolean
}

export type ArrayOptions = Array<string | Array<string | { [key: string]: any }>>

/**
 * babel配置
 *
 * docs: https://babeljs.io/docs/en/config-files
 */
export interface BabelConfiguration {
  /**
   * 转换器
   */
  presets?: ArrayOptions
  /**
   * 插件
   */
  plugins?: ArrayOptions
}

/**
 * CosmiconfigResult
 */
export type SmartCosmiconfigResult<T> = {
  /**
   * 配置
   */
  config: T
  /**
   * 配置文件路径
   */
  filepath: string
  /**
   * 配置是否为空
   */
  isEmpty?: boolean
} | null
