'use strict';

import {SITE_CONTEXT} from '../constants/system';
import {changeSiteContext} from './user.action';

export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const REDIRECT_FROM_LOGIN = 'REDIRECT_FROM_LOGIN';

export function changeRoute(route) {
  return dispatch => {
    let dispatch_payload = {
      type: CHANGE_ROUTE,
      route: route
    };

    dispatch(dispatch_payload);
  }
}

export function redirectFromLogin(route) {
  return dispatch => {
    let dispatch_payload = {
      type: REDIRECT_FROM_LOGIN,
      route: route
    };

    dispatch(changeSiteContext(SITE_CONTEXT.FRONTER));
    dispatch(dispatch_payload);
  }
}
