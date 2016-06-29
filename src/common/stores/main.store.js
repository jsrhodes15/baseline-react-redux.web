'use strict';

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

import {ENVIRONMENT} from '../constants/environment';

export let createStores = (initialState) => {
  
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // only run hot if not local
  if (module.hot && ENVIRONMENT.ENV_TYPE === 'local') {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
