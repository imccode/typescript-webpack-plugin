const TypescriptWebpackPlugin = require('../../lib')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MessageWebpackPlugin = require('message-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new TypescriptWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    hot: true,
    quiet: true,
    progress: true
  },
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
