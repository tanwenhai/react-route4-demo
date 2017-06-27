const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
/* eslint-disable comma-dangle */
module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    // publicPath: '/assets/'
    chunkFilename : '[name].[hash:5].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devServer: {
    // publicPath: path.resolve(__dirname, 'assets'),
    compress: true,
    historyApiFallback: true,
    hot: false,
    port: 3000,
    https: false,
    noInfo: true
  }
};
