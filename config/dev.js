var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'dev',
  'API_PATH': 'https://baseline-sails-api.herokuapp.com',
  'VERSION': 'v ' + pkg.version,
  WEBPACK: {
    preLoaders: [],
    devtool: 'eval'
  }
};
