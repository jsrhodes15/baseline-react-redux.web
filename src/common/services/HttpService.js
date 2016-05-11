'use strict';

require('isomorphic-fetch');
import {KEYS} from '../constants/localStorage';

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

export function serialize(data) {
  return Object.keys(data).map(keyName => {
    return encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
  }).join('&');
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    return response.text()
      .then((responseObj) => {
        var parsed = JSON.parse(responseObj);
        var error = new Error(parsed.message || response.statusText);
        error.response = response;
        throw error;
      });
  }
}

function send(url, options) {
  return new Promise(
    (resolve, reject) => {
      options.headers = options.headers || {};

      var profile = localStorage[KEYS.USER_PROFILE];
      if (profile) {
        profile = JSON.parse(profile);
        options.headers['authorization'] = 'Bearer ' + profile.access_token;
      }

      fetch(url, options)
        .then(checkStatus)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          return resolve(responseJson);
        })
        .catch(error => {
          return reject(error);
        });
    });
}
