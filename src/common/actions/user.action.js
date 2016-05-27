'use strict';

import * as UserService from '../services/UserService';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());

    return UserService.login(email, password)
      .then(profile => {
        dispatch(loginComplete({profile: profile}));
      })
      .catch(error => {
        dispatch(loginComplete({error: error}));
      });
  }
}

export function loginComplete(payload) {
  return {
    type: LOGIN_COMPLETE,
    profile: payload.profile,
    error: payload.error
  };
}

function loginRequest() {
  return {
    type: LOGIN_REQUEST
  };
}

export function updateLoginField(key, value) {
  return dispatch => {
    let dispatch_payload = {
      type: UPDATE_LOGIN_FIELD,
      key: key,
      value: value
    };

    dispatch(dispatch_payload);
  }
}
