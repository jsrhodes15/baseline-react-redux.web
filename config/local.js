var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'local',
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
      }
    ],

    devtool: 'inline-source-map'
  }
};
