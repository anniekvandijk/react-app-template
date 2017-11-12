const path = require('path');

module.exports = {
    entry: [
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
        path: path.join(__dirname, '../build'),
        publicPath: '/',
        filename: 'bundle-prd.js'
    },
};