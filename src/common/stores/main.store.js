'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export const createStores = (initialState) => {
  
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, createLogger()),
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
