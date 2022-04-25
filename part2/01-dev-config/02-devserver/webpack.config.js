const path = require('path')
const HemlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',

    entry: './app.js',

    output: {
        publicPath: '/'
    },

    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: false,
        port: 3030,
        host: '0.0.0.0',

        headers: {
            'X-Access-Token': 'qwe123'
        },

        proxy: {
            '/api': 'http://localhost:9000'
        },

        // https: true
        http2: true,

        historyApiFallback: true
    },

    plugins: [
        new HemlWebpackPlugin()
    ]
}