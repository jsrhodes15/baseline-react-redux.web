import {APP_ENV} from '../constants/environment';
import {USER} from '../constants/endpoints';
import {post} from '../services/http.service';

/**
 * attempts to login a user
 */
export function login(email, password) {
  return new Promise(
    (resolve, reject) => {
      var url = APP_ENV.API_PATH + USER.LOGIN;
      var payload = {
        email: email,
        password: password
      };

      return post(url, payload)
        .then(response => {
          return resolve(response);
        })
        .catch(error => {
          return reject(error);
        });
    });
}
