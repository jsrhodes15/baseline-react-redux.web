var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'dev',
  'API_PATH': '',
  'VERSION': 'v ' + pkg.version,
  WEBPACK: {
    preLoaders: [],
    devtool: 'eval'
  }
};
