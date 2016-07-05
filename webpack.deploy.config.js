'use strict';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * environment specific config - default to dev
 */
const current_environment = process.env.NODE_ENV || 'dev';
const config = require('./config/' + current_environment);

/**
 * common webpack config
 */
const webpack_common = require('./webpack.common.config');

module.exports = {
  context: __dirname + '/src',

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // js entry
    './app.js',

    // html entry
    './index.html'
  ],

  externals: {
    // required for storage module
    'react-native': {}
  },

  module: {
    preLoaders: config.WEBPACK.preLoaders,

    loaders: webpack_common.loaders
  },

  plugins: [
    new ExtractTextPlugin('app.css')
  ],

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  devtool: config.WEBPACK.devtool
};
