import {
  LOGIN_COMPLETE,
  LOGIN_REQUEST,
  LOGOUT
} from '../actions/user.action';

const initial_state = {
  login_profile: {
    email: ''
  }
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case LOGIN_COMPLETE:
      return loginComplete(state, action);
    case LOGIN_REQUEST:
      return loginRequest(state, action);
    case LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
}

function loginComplete(state, action) {
  return Object.assign({}, state, {
    type: LOGIN_COMPLETE,
    error: action.error,
    profile: action.error ? null : action.profile,
    login_profile: action.error ? null : {email: action.profile.email},
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

function logout(state, action) {
  return Object.assign({}, state, {
    type: LOGOUT,
    profile: null,
    error: null
  });
}
