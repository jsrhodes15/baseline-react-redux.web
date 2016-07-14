import {createStore, applyMiddleware, compose} from 'redux';
import {hashHistory} from 'react-router';

/**
 * import root reducer
 */
import rootReducer from '../reducers';

/**
 * third party middleware
 */
import {routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

/**
 * create and return the main store
 */
export default (initialState) => {

  // build redux router middleware
  const routingMiddleware = routerMiddleware(hashHistory);
  
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, createLogger(), routingMiddleware),
      // redux dev tools extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  /**
   * only runs locally - enable webpack hot module replacement for reducers
   */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
