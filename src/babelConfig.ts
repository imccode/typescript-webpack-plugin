import { cosmiconfigSync } from 'cosmiconfig'
import { Compiler } from 'webpack'
import { BabelConfiguration, TypescriptWebpackPluginOptions, SmartCosmiconfigResult } from './types'

/**
 * 生成babel配置
 */
export default (options: TypescriptWebpackPluginOptions, compiler: Compiler) => {
  const defaultBabelConfig = {
    /**
     * 转换器
     */
    presets: [
      /**
       * 转换需要的浏览器环境代码
       */
      ['@babel/preset-env', { modules: false, useBuiltIns: 'usage', corejs: 3 }],
      '@babel/preset-typescript'
    ],
    /**
     * 插件
     */
    plugins: [
      /**
       * var.prd ?? 'test'
       */
      '@babel/plugin-proposal-nullish-coalescing-operator',
      /**
       * 装饰器 @connet()
       */
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      /**
       * class 类
       */
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      /**
       * export v from 'mod'
       */
      '@babel/plugin-proposal-export-default-from',
      /**
       * export * as ns from 'mod'
       */
      '@babel/plugin-proposal-export-namespace-from',
      /**
       * 去除重复的 polyfill 导入
       */
      ['@babel/plugin-transform-runtime', { corejs: 3 }]
    ]
  }
  /**
   * 用户的babel配置
   */
  const userBabelConfig: SmartCosmiconfigResult<BabelConfiguration> = cosmiconfigSync(
    'babel'
  ).search()

  const returnKey = (data: string | Array<string | { [key: string]: any }>): string => {
    if (typeof data === 'string') {
      return data
    }

    if (Array.isArray(data) && data.length > 0) {
      const name = data[0]
      if (typeof name === 'string') {
        return name
      }
    }

    return ''
  }

  if (userBabelConfig) {
    const { presets, plugins }: BabelConfiguration = userBabelConfig.config

    if (presets && Array.isArray(presets)) {
      defaultBabelConfig.presets.forEach((item, index) => {
        const key = returnKey(item)
        presets.forEach((userPareset, userIndex) => {
          const useKey = returnKey(userPareset)
          if (useKey !== '' && key === useKey) {
            defaultBabelConfig.presets[index] = userPareset as any
            delete presets[userIndex]
          }
        })
      })
      defaultBabelConfig.presets = [...defaultBabelConfig.presets!, ...presets.filter(item => !!item)] as any
    }

    if (plugins && Array.isArray(plugins)) {
      defaultBabelConfig.plugins.forEach((item, index) => {
        const key = returnKey(item)
        plugins.forEach((userPlugin, userIndex) => {
          const useKey = returnKey(userPlugin)
          if (useKey !== '' && key === useKey) {
            defaultBabelConfig.plugins[index] = userPlugin as any
            delete plugins[userIndex]
          }
        })
      })

      defaultBabelConfig.plugins = [...plugins.filter(item => !!item), ...defaultBabelConfig.plugins!] as any
    }
  }

  return defaultBabelConfig
}
