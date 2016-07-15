var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'dev',
  'API_PATH': 'http://localhost:1337',
  'VERSION': 'v ' + pkg.version,

  /**
   * environment specific webpack config
   */
  WEBPACK: {
    preLoaders: [
      {
        loader: 'source-map-loader',
        test: /\.js$/
      },

      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],

    devtool: 'inline-source-map'
  }
};
