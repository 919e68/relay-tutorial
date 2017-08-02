const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: path.resolve('public/js'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }],
  }
}
