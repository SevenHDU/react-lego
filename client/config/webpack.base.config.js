const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolveApp } = require('./util');
const { appIndexJs, appHtml } = require('./paths');

module.exports = {
    entry: {
        app: appIndexJs,
    },
    output: {
        filename: 'bound.js',
        path: resolveApp('dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: [
                            'react-hot-loader/babel',
                            [
                                'babel-plugin-react-scoped-css',
                                {
                                    include: '(sa|sc|c)ss$',
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'scoped-css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: appHtml,
        }),
    ],
};
