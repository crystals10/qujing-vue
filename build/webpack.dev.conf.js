var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      template: 'auth.html',
      inject: true,
      chunks:['auth']
    }),
    new HtmlWebpackPlugin({
      filename: 'manage.html',
      template: 'manage.html',
      inject: true,
      chunks:['manage']
    }),
    new HtmlWebpackPlugin({
      filename: 'open.html',
      template: 'open.html',
      inject: true,
      chunks:['open']
    }),
    new HtmlWebpackPlugin({
      filename: 'sub.html',
      template: 'sub.html',
      inject: true,
      chunks:['sub']
    }),
    new FriendlyErrorsPlugin()
  ]
})
