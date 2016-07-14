import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {user_reducer} from './user.reducer';

export default combineReducers({
  user_reducer,
  routing: routerReducer
});
