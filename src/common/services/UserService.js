'use strict';

var environment = require('../constants/environment.js');
import * as ENDPOINTS from '../constants/endpoints';

export function login(email, password) {
  return new Promise(
    (resolve, reject) => {
      var url = environment.API_PATH + ENDPOINTS.USER.LOGIN;
      var payload = {
        email: email,
        password: password
      };
      HttpService.post(url, payload)
        .then((response) => {
          return resolve(response);
        })
        .catch((err) => {
          return reject(err);
        });
    })
}
