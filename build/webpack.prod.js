const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')
const { resolve } = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') // eslint-disable-line

module.exports = merge(common, {
  mode: 'production',
  entry: resolve(__dirname, '../src'),
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '../dist/',
    library: 'VueMessage',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(png|svga?|jpg|gif|mp3|mp4|wma|ttf|TTF|woff|eot|EOT|otf|OTF|WOFF)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000,
              name: 'img/[name]-[hash:4].[ext]'
            }
          }
        ]
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
})
