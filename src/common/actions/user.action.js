'use strict';

import * as userService from '../services/user.service';
import {changeRoute} from './navigation.action';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGOUT = 'LOGOUT';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export function login(email, password) {
  return dispatch => {

    dispatch({type: LOGIN_REQUEST});

    return userService.login(email, password)
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

export function logout() {
  return dispatch => {
    dispatch({type: LOGOUT});
    dispatch(changeRoute('/'));
  }
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
