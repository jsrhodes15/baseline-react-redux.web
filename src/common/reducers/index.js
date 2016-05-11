'use strict';

import {combineReducers} from 'redux';
import {navigation_reducer} from './navigation.reducer';
import {user_reducer} from './user.reducer';

const rootReducer = combineReducers({
  navigation_reducer,
  user_reducer
});

export default rootReducer;