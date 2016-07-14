import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {user_reducer} from './user.reducer';

const rootReducer = combineReducers({
  user_reducer,
  routing: routerReducer
});

export default rootReducer;
