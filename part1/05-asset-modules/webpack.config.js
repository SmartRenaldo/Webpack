const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename: 'images/[contenthash][ext]'
    },

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        })
    ],

    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.png$/,
                type: 'asset/resource',
                // the proproty of generator is higher than assetModuleFilename
                generator: {
                    filename: 'images/[contenthash][ext]'
                }
            },

            {
                test: /\.svg$/,
                type: 'asset/inline'
            },

            {
                test: /\.txt$/,
                type: 'asset/source'
            },

            // ALT + Z 折行 （Toggle word wrap）
            // By default, in 'asset' type, webpack will automatically choose between resource and inline by default: files smaller than 8kb will be treated as inline modules, otherwise they will be treated as resource modules
            {
                test: /\.jpg$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 * 1024,
                    }
                }
            }
        ]
    }
}