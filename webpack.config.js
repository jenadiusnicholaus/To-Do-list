const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  mode: 'development',

  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },

  devServer: {
    static: './dist',
    hot: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
    }),
  ],
  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',

  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};