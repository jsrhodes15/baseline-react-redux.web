'use strict';

import {
  LOGIN_COMPLETE,
  LOGIN_REQUEST,
  UPDATE_LOGIN_FIELD
} from '../actions/user.action';

var initial_state = {
  login_profile: {
    email: '',
    password: ''
  }
};

export function user_reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN_COMPLETE:
      return loginComplete(state, action);
    case LOGIN_REQUEST:
      return loginRequest(state, action);
    case UPDATE_LOGIN_FIELD:
      return updateLoginField(state, action);
    default:
      return state;
  }
}

function loginComplete(state, action) {
  return Object.assign({}, state, {
    type: LOGIN_COMPLETE,
    error: action.error,
    profile: action.profile,
    loading: false
  });
}

function loginRequest(state, action) {
  return Object.assign({}, state, {
    type: LOGIN_REQUEST,
    loading: true,
    error: null
  });
}

function updateLoginField(state, action) {
  var login_profile = Object.assign({}, state.login_profile);
  login_profile[action.key] = action.value;

  return Object.assign({}, state, {
    type: UPDATE_LOGIN_FIELD,
    error: null,
    login_profile: login_profile
  });
}
