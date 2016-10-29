/**
 * webpack concepts are following facebook's create-react-app
 */
const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');

module.exports = {
  bail: true,

  devtool: 'eval',

  entry: {
    app: path.join(srcPath, 'app'),
  },

  output: {
    path: './dist',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
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
        query: require('./babel.prod'),
      },

      {
        test: /\.css$/,
        // Disable autoprefixer in css-loader itself:
        // https://github.com/webpack/css-loader/issues/281
        // We already have it thanks to postcss.
        loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
      },

      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },

      {
        test: /\.json$/,
        loader: 'json'
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
    // TODO: consider separate config for production,
    // e.g. to enable no-console and no-debugger only in prod.
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
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'window.APP_ENV': JSON.stringify(require('./app.prod'))
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
    }),

    new ExtractTextPlugin('[name].[contenthash].css'),
  ],
};
