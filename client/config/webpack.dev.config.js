const merge = require('webpack-merge');
const { appIndexJs } = require('./paths');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: [
        'react-hot-loader/patch', 
        appIndexJs
    ],
    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: '9191',
        historyApiFallback: true,
    },
});