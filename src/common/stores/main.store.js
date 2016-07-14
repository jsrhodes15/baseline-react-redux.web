import {createStore, applyMiddleware, compose} from 'redux';
import {hashHistory} from 'react-router';

import {ENVIRONMENT} from '../constants/environment';

/**
 * third party middleware
 */
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';

/**
 * import root reducer
 */
import rootReducer from '../reducers';

/**
 * create and return the main store
 */
export default (initialState) => {
  /**
   * build redux router middleware
   */
  const routingMiddleware = routerMiddleware(hashHistory);

  /**
   * baseline middleware
   */
  const baseline_middlewares = [thunkMiddleware, routingMiddleware];

  /**
   * build store for non-production environments
   */
  if (ENVIRONMENT.ENV_TYPE !== 'production') {
    const dev_store = require('./dev.store');
    return dev_store.default(initialState, rootReducer, baseline_middlewares);
  }

  /**
   * return production store
   */
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...baseline_middlewares))
  );
};
