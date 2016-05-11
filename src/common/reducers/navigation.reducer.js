'use strict';

import {
  CHANGE_ROUTE,
  REDIRECT_FROM_LOGIN
} from '../actions/navigation.action';

export function navigation_reducer(state = {}, action) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return changeRoute(state, action);
    case REDIRECT_FROM_LOGIN:
      return redirectFromLogin(state, action);
    default:
      return state;
  }
}

function changeRoute(state, action) {
  return Object.assign({}, state, {
    type: CHANGE_ROUTE,
    route: action.route,
    previous_route: state.route
  });
}

function redirectFromLogin(state, action) {
  return Object.assign({}, state, {
    type: REDIRECT_FROM_LOGIN,
    route: action.route,
    previous_route: state.route
  });
}
