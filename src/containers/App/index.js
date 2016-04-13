'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Tour from '../Tour';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Tour} />
      </Router>
    );
  }
}