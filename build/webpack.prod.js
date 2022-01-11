const utils  = require('./webpack.utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const entry = utils.componentFiles.map(item => ({item: utils.pathResolve(`../packages/${item}/index.js`)}))


module.exports = {
    mode: 'development',
    entry,
    output: {
        filename: () => {
            return '[name]/[name].js'
        },
        path: utils.pathResolve('../lib'),
        libraryTarget: 'commonjs2',
    },
    externals: {
        'vue': 'Vue'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: () => {
                return '[name]/[name].css'
            }
        })
    ]
}
