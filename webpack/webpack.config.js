const path = require('path');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  entry: ['./src/main/index.js'],
  output: {
    path: path.resolve(__dirname, "../target"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
    ]
  },
  plugins: [
    plugins.HtmlWebpackPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
  ],
};