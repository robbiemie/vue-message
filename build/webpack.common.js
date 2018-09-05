var path = require('path')
var webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // eslint-disable-line
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // eslint-disable-line
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin') // eslint-disable-line
const CleanWebpackPlugin = require('clean-webpack-plugin') // eslint-disable-line
const EslintFriendlyFormatter = require('eslint-friendly-formatter')

const isDev = process.env.NODE_ENV !== 'production' // eslint-disable-line

console.log(`当前node环境为：${process.env.NODE_ENV}`)

const dist = process.env.baseWidth || ''

module.exports = {
  entry: path.join(__dirname, '../lib/vue-message'),
  output: {
    path: path.resolve(__dirname, `../dist/${dist}`),
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
        exclude: /node_modules/
      },
      {
        test: /\.(png|svga?|jpg|gif|mp3|mp4|wma|ttf|TTF|woff|eot|EOT|otf|OTF|WOFF)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000,
              fallback: 'file-loader',
              name: '[name].[ext]?[hash]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.scss', '.css', '.json']
  },
  plugins: [
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.join(__dirname, '../')
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new VueLoaderPlugin()
  ]
}
