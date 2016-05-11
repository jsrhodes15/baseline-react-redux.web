/**
 * This is the top level container component
 *
 *  In this component, we define our Routes and handle any app level navigation, such as -
 *    redirecting on logout,
 *    redirecting if the user was previously authenticated,
 *    verifying authentication when navigating to routes, etc..
 *
 */

'use strict';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import {KEYS} from '../../common/constants/localStorage';
import {loginComplete} from '../../common/actions/user.action';
import StartScreen from '../StartScreen';

export default class App extends Component {
  constructor(props) {
    super(props);

    document.title = 'React Baseline';

    this.state = {
      unsubscribe: this.props.store.subscribe(this._handleStoreChange)
    }
  }

  componentWillMount() {
    if (localStorage[KEYS.USER_PROFILE]) {
      let profile = JSON.parse(localStorage[KEYS.USER_PROFILE]);

      if (profile.user && profile.user.status === 'authenticated') {
        this.props.store.dispatch(loginComplete({profile: profile}));
        // if (location.hash === '') {
        //   this.props.store.dispatch(redirectFromLogin('/dashboard'));
        // }
      }
    }
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  _handleStoreChange() {
    var user_reducer = this.props.store.getState().user_reducer;
    if (user_reducer.profile && user_reducer.profile.user.status === 'authenticated') {
      localStorage[KEYS.USER_PROFILE] = JSON.stringify(user_reducer.profile);
    } else {
      delete localStorage[KEYS.USER_PROFILE];
    }
  }

  _verifyAuth(nextState, replace) {
    var user_reducer = this.props.store.getState().user_reducer;
    if (!user_reducer.profile) {
      replace({
        pathname: '/',
        state: {nextPathname: nextState.location.pathname}
      });
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={StartScreen} />
      </Router>
    );
  }
}