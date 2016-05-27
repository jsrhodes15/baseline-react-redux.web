'use strict';

import {ENVIRONMENT} from '../constants/environment';
import {USER} from '../constants/endpoints';
import {post} from '../services/http';

export function login(email, password) {
  return new Promise(
    (resolve, reject) => {
      var url = ENVIRONMENT.API_PATH + USER.LOGIN;
      var payload = {
        email: email,
        password: password
      };

      post(url, payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => {
          return reject(error);
        });
    });
}
