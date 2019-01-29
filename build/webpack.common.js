var path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // eslint-disable-line
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // eslint-disable-line
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // eslint-disable-line
const EslintFriendlyFormatter = require('eslint-friendly-formatter')

const isDev = process.env.NODE_ENV !== 'production' // eslint-disable-line

console.log(`当前node环境为：${process.env.NODE_ENV}`)

// const dist = process.env.baseWidth || ''

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          // isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        enforce: 'pre',
        test: /\.(jsx?|vue)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: EslintFriendlyFormatter
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          'presets': [['babel-preset-env', {
            'targets': {
              'browsers': ['last 2 versions', 'safari >= 7']
            }
          }]]
        },
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.scss', '.css', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new VueLoaderPlugin()
  ]
}
