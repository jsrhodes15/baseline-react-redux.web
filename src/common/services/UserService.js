'use strict';

import {ENVIRONMENT} from '../../common/constants/environment';
import * as ENDPOINTS from '../constants/endpoints';
import * as HttpService from '../services/HttpService';

export function login(email, password) {
  return new Promise(
    (resolve, reject) => {
      var url = ENVIRONMENT.API_PATH + ENDPOINTS.USER.LOGIN;
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
