import {push} from 'react-router-redux';
import * as userService from '../services/user.service';
import * as storageService from '../services/storage.service';
import {KEYS} from '../constants/localStorage';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_COMPLETE = 'LOGIN_COMPLETE';
export const LOGOUT = 'LOGOUT';

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
    storageService.save(KEYS.USER_PROFILE, profile);
    dispatch({type: KEYS.USER_PROFILE});
  }
}

/**
 * gets profile from storage
 *  connects socket, dispatches success, and navs to dashboard on success
 */
export function validateProfile() {
  return (dispatch, getState) => {

    return storageService.load(KEYS.USER_PROFILE)
      .then(profile => {
        let default_route = '/dashboard';
        if (profile && profile.status === 'authenticated') {
          // get next routing state - default to /dashboard if next route is not available
          let routing_location = getState().routing.locationBeforeTransitions || {};
          let next_route = routing_location.state ? routing_location.state.nextPathname : default_route;

          dispatch(loginComplete({profile: profile}));
          dispatch(push(next_route));
        }
      });
  }
}
