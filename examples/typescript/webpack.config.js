const TypescriptWebpackPlugin = require('../../lib')
const path = require('path')

module.exports = {
  entry: './src/index',
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
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
          priority: 10
        }
      }
    }
  }
}
