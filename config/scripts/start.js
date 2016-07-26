'use strict';

(function() {
  var fs = require('fs');
  var path = require('path');

  var currentEnvironment = process.env.NODE_ENV || 'dev';
  var config = require('../app.' + currentEnvironment);

  delete config.WEBPACK;

  console.log('## Building environment.js for ' + currentEnvironment.toUpperCase() + ' ##');
  
  fs.writeFileSync(path.join('./src/common/constants/', 'environment.js'),
    '\ export const ENVIRONMENT = ' + JSON.stringify(config) + '\;\
    ');
}());
