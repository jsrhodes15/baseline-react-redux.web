/**
 * webpack concepts are following facebook's create-react-app
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');
const nodeModulesPath = path.join(__dirname, '../node_modules');

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    path.join(srcPath, 'app'),
  ],

  output: {
    filename: 'app.js',
    path: './dist',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  resolveLoader: {
    root: nodeModulesPath,
    moduleTemplates: ['*-loader'],
  },

  module: {
    preLoaders: [
      {
        loader: 'source-map',
        test: /\.js$/,
      },

      {
        test: /\.js$/,
        loader: 'eslint',
        include: srcPath,
      },
    ],

    loaders: [
      {
        test: /\.js$/,
        include: srcPath,
        loader: 'babel',
        query: require('./babel.dev'),
      },

      {
        test: /\.css$/,
        loader: 'style!css!postcss',
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },

      {
        test: /\.json$/,
        loader: 'json',
      },

      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=assets/images/[name].[ext]',
      },

      {
        test: /\.(mp4|webm)$/,
        loader: 'url?limit=10000',
      },
    ],
  },

  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false,
  },

  postcss: function postcss() {
    return [autoprefixer];
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './index.html',
      favicon: './favicon.ico',
    }),

    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"dev"',
      'window.APP_ENV': JSON.stringify(require('./app.dev')),
    }),
  ],
};
