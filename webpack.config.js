const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Calculadora-Web',
    template: path.join(__dirname, 'src/index.html'),
    inject: 'body',
    favicon: 'src/assets/images/javascript.svg'
  })],
  devServer: {
    port: 9000
  },
};