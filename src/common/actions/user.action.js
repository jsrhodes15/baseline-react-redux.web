import {push} from 'react-router-redux';
import * as userService from '../services/user.service';
import {KEYS} from '../constants/localStorage';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGOUT = 'LOGOUT';
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';

/**
 * attempts to log in a user
 */
export function login(email, password) {
  return dispatch => {

    dispatch({type: LOGIN_REQUEST});

    return userService.login(email, password)
      .then(profile => {
        dispatch(saveProfile(profile));
        dispatch(loginComplete({profile: profile}));
        dispatch(push('/dashboard'));
      })
      .catch(error => {
        dispatch(loginComplete({error: error}));
      });
  }
}

/**
 * returns the loginComplete dispatch payload
 */
export function loginComplete(payload) {
  return {
    type: LOGIN_COMPLETE,
    profile: payload.profile,
    error: payload.error
  };
}

/**
 * logs a user out of our system
 */
export function logout() {
  return dispatch => {
    let logout_profile = {};

    dispatch({type: LOGOUT});
    dispatch(saveProfile(logout_profile));
    dispatch(push('/'));
  }
}

/**
 * save a profile to device storage system
 */
export function saveProfile(profile) {
  return dispatch => {
    storage.save({key: KEYS.USER_PROFILE, rawData: profile});
    dispatch({type: KEYS.USER_PROFILE});
  }
}

/**
 * set the value for a login field (email, password, etc.)
 *  note: this could also be handled via StartScreen state
 *    we are handling via redux to persist values and also handle cross platform
 */
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

/**
 * gets profile from storage
 *  connects socket, dispatches success, and navs to dashboard on success
 */
export function validateProfile() {
  return (dispatch, getState) => {

    return storage.load({key: KEYS.USER_PROFILE, autoSync: false})
      .then(profile => {
        let default_route = '/dashboard';
        if (profile && profile.status === 'authenticated') {
          // get next routing state - default to /dashboard if next route is not available
          var routing_location = getState().routing.locationBeforeTransitions || {};
          var next_route = routing_location.state && routing_location.state.nextPathname || default_route;

          dispatch(loginComplete({profile: profile}));
          dispatch(push(next_route));
        }
      })
      .catch(error => {
        console.warn(error);
        // handle missing profile
        dispatch(saveProfile({}));
      });
  }
}
