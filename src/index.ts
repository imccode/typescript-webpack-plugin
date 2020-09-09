import { Compiler } from 'webpack'
import { mergeOptions } from './merge'
import rules from './rules'
import { TypescriptWebpackPluginOptions } from './types'

class TypescriptWebpackPlugin {
  options: TypescriptWebpackPluginOptions = {}
  constructor(options: TypescriptWebpackPluginOptions = {}) {
    this.options = options
  }

  apply(compiler: Compiler) {
    compiler.options.resolve!.extensions = [
      ...(compiler.options.resolve?.extensions || []),
      ...['.ts', '.tsx', '.js', '.jsx']
    ]
    
    this.options = mergeOptions(this.options, compiler)

    compiler.options.module?.rules.push(...rules(this.options, compiler))
  }
}

export * from './types'
export { TypescriptWebpackPlugin }
export default TypescriptWebpackPlugin
module.exports = TypescriptWebpackPlugin