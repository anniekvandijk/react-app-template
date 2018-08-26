var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./src/client/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!sass-loader",
        })
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/": "http://localhost:3300"
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/client/index.html', 
      filename: './index.html' 
    }),
    new ExtractTextPlugin('style.css')
  ]
}