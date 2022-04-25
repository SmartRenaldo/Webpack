const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: './app.js',

  plugins: [
    new HtmlWebpackPlugin({})
  ],

  externalsType: 'script',

  externals: {
    jquery: [
      'https://code.jquery.com/jquery-3.6.0.js',
      '$'
    ]
  }
}