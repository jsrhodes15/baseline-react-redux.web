'use strict';

import { combineReducers } from 'redux';
import { tour } from './tour.reducer';

const rootReducer = combineReducers({
  tour
});

export default rootReducer;