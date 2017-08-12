import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: path.resolve('src/app/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
      filename: 'index.html',
      inject: 'body',
    })
  ],
};
