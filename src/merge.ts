import path from 'path'
import { Compiler } from 'webpack'
import { TypescriptWebpackPluginOptions } from './types'

export const mergeOptions = (options: TypescriptWebpackPluginOptions = {}, compiler: Compiler) => {
  // 默认配置
  const defaultOptions: TypescriptWebpackPluginOptions = {
    cacheDirectory:
      compiler.options.mode === 'production'
        ? false
        : path.resolve(compiler.context, 'node_modules/.cache', 'typescript')
  }

  const mergeOptions: TypescriptWebpackPluginOptions = {
    ...defaultOptions,
    ...options
  }

  if (options.cacheDirectory && typeof options.cacheDirectory === 'string') {
    mergeOptions.cacheDirectory = options.cacheDirectory
  }

  return mergeOptions
}
