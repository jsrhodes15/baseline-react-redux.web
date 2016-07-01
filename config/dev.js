var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'dev',
  'API_PATH': 'https://baseline-sails-api.herokuapp.com',
  'VERSION': 'v ' + pkg.version,

  /**
   * environment specific webpack config
   */
  WEBPACK: {
    preLoaders: [],

    devtool: 'eval'
  }
};
