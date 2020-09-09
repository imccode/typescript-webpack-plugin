const TypescriptWebpackPlugin = require('../../lib')
const path = require('path')

module.exports = {
  output: {
    filename: '[name].js'
  },
  plugins: [new TypescriptWebpackPlugin()],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    removeEmptyChunks: true,
    splitChunks: {
      cacheGroups: {
        polyfill: {
          test: /node_modules/,
          name: 'polyfill',
          chunks: 'all',
          priority: 10
        }
      }
    }
  }
}
