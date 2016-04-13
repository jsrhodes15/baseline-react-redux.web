'use strict';

(function() {
  var fs = require('fs');
  var path = require('path');

  var currentEnvironment = process.env.NODE_ENV || 'local';
  var config = require('../' + currentEnvironment);

  delete config.WEBPACK;

  console.log('## Building environment.js for ' + currentEnvironment.toUpperCase() + ' ##');
  
  fs.writeFileSync(path.join('./src/common/constants/', 'environment.js'),
    '\ module.exports = ' + JSON.stringify(config) + '\;\
    ');
}());
