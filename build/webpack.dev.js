const webpack = require('webpack')
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const common = require('./webpack.common.js')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// console.log('dir', path.resolve(__dirname, '../src'), __dirname)
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '~': path.resolve(__dirname, '../../vue-message')
    }
  },
  entry: path.join(__dirname, '../src'),
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    open: true,
    quiet: true, // necessary for FriendlyErrorsPlugin
    // 随机搞一个端口吧
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    watchOptions: {
      poll: false
    }
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../src/html/index.html')
    })
  ]
})
