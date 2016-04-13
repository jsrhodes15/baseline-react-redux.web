'use strict';

import {
  ADD_TOUR
} from '../actions/tour.action';

export function tour(state = {}, action) {
  switch (action.type) {
    case ADD_TOUR:
      return Object.assign({}, state, {});
    default:
      return state;
  }
}
