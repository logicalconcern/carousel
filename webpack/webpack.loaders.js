const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env', 
          '@babel/preset-react'
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import",
          ["@babel/plugin-transform-runtime", { "regenerator": true } ]
        ]
      }
    }
  };

  const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
      loader: 'eslint-loader',
      options: {
        configFile: __dirname + '/.eslintrc'
      },
    }
  };

  const CSSLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: __dirname + '/../../public/css/'
        }
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: "[local]___[hash:base64:5]"
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: __dirname + '/postcss.config.js'
          }
        },
      },
    ],
  };

  module.exports = {
    JSLoader: JSLoader,
    ESLintLoader: ESLintLoader,
    CSSLoader: CSSLoader,
  };