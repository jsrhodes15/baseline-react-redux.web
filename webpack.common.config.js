'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  loaders: [
    {
      loader: 'babel',

      test: /\.js$/,

      exclude: /node_modules/,

      // Options to configure babel with
      query: {
        plugins: ['transform-runtime']
      }
    },

    /**
     * libraries that need babel
     */
    {
      loader: 'babel',

      test: /\.js?$/,

      include: [
        path.join(__dirname, 'node_modules/react-native-storage')
      ],

      query: {
        cacheDirectory: true,
        plugins: ['transform-runtime']
      }
    },

    {
      test: /\.html$/,
      loader: 'file?name=[name].[ext]'
    },

    {
      test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$|\.wav$|\.mp3$/,
      loader: 'file?name=assets/images/[name].[ext]'
    },

    {
      test: /\.woff$|\.ttf$|\.eot$/,
      loader: 'file?name=assets/fonts/[name].[ext]'
    },

    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    },

    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass')
    }
  ]

};
