import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import createStore from './common/stores/main.store';
import initStorage from './common/initializers/storage.initializer';

/**
 * create Redux store
 */
const store = createStore();

/**
 * initialize storage - pass appropriate binding context
 */
initStorage(window);

// Vendor JS
require('../node_modules/material-design-lite/dist/material.min.js');

// Vendor CSS
require('../node_modules/material-design-lite/dist/material.blue_grey-blue.min.css');
require('../node_modules/js-snackbar/dist/snackbar.css');

// Stylesheets
require('./assets/styles/main.scss');

// Images and icons
require.context('./assets/images', true, /.*/);

if (document.getElementById('app')) {
  render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.getElementById('app')
  );
}
