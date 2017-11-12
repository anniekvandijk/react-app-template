const path = require('path');
const hostEnv = require('./environment');
const config = require('./config');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot-loader!babel-loader'
        },
        {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '../build',
        publicPath: '/',
        filename: 'bundle-prd.js'
    },
};