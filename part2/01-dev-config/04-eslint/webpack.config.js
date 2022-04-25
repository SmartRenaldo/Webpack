const HtmlWebpackPlugin = require('html-webpack-plugin');
// use 'eslint-webpack-plugin' instead of 'eslint-loader'
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: './src/app.js',

  devServer: {
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new ESLintPlugin(),
  ],
};
