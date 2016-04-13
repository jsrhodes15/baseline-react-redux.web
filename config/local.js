var pkg = require('../package.json');

module.exports = {
  'ENV_TYPE': 'local',
  'API_PATH': '',
  'VERSION': 'v ' + pkg.version,
  WEBPACK: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
    devtool: 'source-map'
  }
};