'use strict';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import StartScreen from './containers/StartScreen';
import * as main_store from './common/stores/main.store';

const store = main_store.createStores();

// Vendor JS
require('../node_modules/material-design-lite/dist/material.min.js');

// Vendor CSS
require('../node_modules/material-design-lite/dist/material.blue_grey-blue.min.css');

// Stylesheets
require('./assets/styles/main.scss');

// Images and icons
require.context('./assets/images', true, /.*/);

if (document.getElementById('app')) {
  render(
    <Provider store={store}>
      <StartScreen store={store}/>
    </Provider>,
    document.getElementById('app')
  );
}
