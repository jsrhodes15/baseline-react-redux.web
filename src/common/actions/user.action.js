'use strict';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

export function loginComplete(payload) {
  return {
    type: LOGIN_COMPLETE,
    profile: payload.profile,
    error: payload.error
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());

    // return UserService.login(username, password, phoneExt)
    //   .then(profile => {
    //     dispatch(loginComplete({profile: profile}));
    //   })
    //   .catch(error => {
    //     dispatch(loginComplete({error: error}));
    //   });
  }
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
