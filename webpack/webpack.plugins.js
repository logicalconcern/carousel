const path = require('path');
const _HtmlWebpackPlugin = require('html-webpack-plugin');
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _StyleLintPlugin = require('stylelint-webpack-plugin');

const HtmlWebpackPlugin = new _HtmlWebpackPlugin({
    inject: true,
    template: path.resolve(__dirname, '../src/resources/index.html')
});

const MiniCssExtractPlugin = new _MiniCssExtractPlugin({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});

const StyleLintPlugin = new _StyleLintPlugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src'),
  files: '**/*.css',
  failOnError: false,
  quiet: false,
});

module.exports = {
  HtmlWebpackPlugin: HtmlWebpackPlugin,
  MiniCssExtractPlugin: MiniCssExtractPlugin,
  StyleLintPlugin: StyleLintPlugin
};