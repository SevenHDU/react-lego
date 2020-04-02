const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveApp } = require('./util');
const { appIndexJs, appHtml } = require('./paths');

module.exports = {
    entry: {
        app: appIndexJs,
    },
    output: {
        filename: 'bound.js',
        path: resolveApp('dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-env',
                    ],
                    plugins: [
                        'react-hot-loader/babel'
                    ]
                },
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appHtml
        })
    ]
};