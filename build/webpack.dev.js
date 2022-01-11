const utils  = require('./webpack.utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    entry: utils.pathResolve('../src/index.js'),
    output: {
        filename: "[name].js",
        path: utils.pathResolve('../public'),
        libraryTarget: 'umd',
    },
    devServer: {
        port: '6666',
        compress: true,
    },
    devtool: "source-map",
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
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: utils.pathResolve('../public/index.html')
        })
    ]
}
