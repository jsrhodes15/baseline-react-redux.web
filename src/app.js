import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import createStore from './common/stores/main.store';

/**
 * vendor
 */
import '../node_modules/js-snackbar/dist/snackbar.css';

// Images and icons
require.context('./assets/images', true, /.*/);

/**
 * create Redux store
 */
const store = createStore();

if (document.getElementById('app-root')) {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store}/>
    </Provider>,
    document.getElementById('app-root')
  );
}
