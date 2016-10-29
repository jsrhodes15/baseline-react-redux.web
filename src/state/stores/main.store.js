import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';

import { APP_ENV } from '../../constants/environment';

/**
 * third party middleware
 */
import { routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';

/**
 * local middleware
 */
import { handleForbidden, notifyError } from '../middleware/error.middleware';

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
   * baseline middleware for all environments
   */
  const baseline_middlewares = [thunkMiddleware, routingMiddleware, notifyError, handleForbidden];

  /**
   * build store for non-production environments
   */
  if (APP_ENV.ENV_TYPE !== 'production') {
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
