const { resolve } = require('path')
const { HotModuleReplacementPlugin, NamedModulesPlugin, ProvidePlugin, DefinePlugin,
  optimize: { AggressiveMergingPlugin } } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BabiliPlugin = require('babili-webpack-plugin')
const OptimizeJsPlugin = require('optimize-js-plugin')
const merge = require('webpack-merge')

const BASE = {
  entry: {
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'src'),

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new OptimizeJsPlugin(),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new ProvidePlugin({
      Promise: 'bluebird',
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
    }),
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(BASE, {
    entry: {
      bundle: './index.js'
    },
    output: { filename: '[name]-[chunkhash].js' },
    devtool: false,
    plugins: [
      new AggressiveMergingPlugin(),
      new BabiliPlugin()
    ]
  })
} else {
  module.exports = merge(BASE, {
    entry: {
      bundle: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/only-dev-server',
        './index.js'
      ]
    },
    performance: { hints: false },
    devtool: 'inline-source-map',
    devServer: {
      port: 8090,
      hot: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new HotModuleReplacementPlugin(),
      new NamedModulesPlugin()
    ]
  })
}
