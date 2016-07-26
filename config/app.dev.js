var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'dev',
  'API_PATH': 'http://localhost:1337',
  'VERSION': 'v ' + pkg.version
};
