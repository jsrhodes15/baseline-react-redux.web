require('isomorphic-fetch');
import * as storageService from '../services/storage.service';
import { KEYS } from '../../constants/localStorage';

export function get(url) {
  var options = {
    method: 'GET'
  };
  return send(url, options);
}

export function post(url, payload) {
  var options = {
    method: 'POST',
    body: JSON.stringify(payload)
  };
  return send(url, options);
}

export function put(url, payload) {
  var options = {
    method: 'PUT',
    body: JSON.stringify(payload)
  };
  return send(url, options);
}

export function send(url, options) {
  return new Promise(
    (resolve, reject) => {
      // ensure options and options.headers are objects
      let fetch_options = options || {};
      fetch_options.headers = fetch_options.headers || {};

      return storageService.load(KEYS.USER_PROFILE)
        .then(profile => {
          return profile && addProfileHeaders(fetch_options, profile);
        })
        .then(() => {
          return fetch(url, fetch_options);
        })
        .then(checkStatus)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          return resolve(responseJson);
        })
        .catch(err => {
          return reject(err);
        });
    });
}

/**
 * builds a query string from an object
 */
export function serialize(data) {
  return Object.keys(data).map((keyName) => {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
}

/**
 * To have fetch Promise reject on HTTP error statuses, i.e. on any non-2xx status, define a custom response handler:
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    return response.text()
      .then(responseObj => {
        var parsed = JSON.parse(responseObj);
        var error = new Error(parsed.message || response.statusText);
        error.response = response;
        throw error;
      });
  }
}

/**
 * add any headers associated with the user's profile
 */
function addProfileHeaders(fetch_options, profile) {
  fetch_options.headers['authorization'] = 'Bearer ' + profile.access_token
}
