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
import {Router, Route, hashHistory} from 'react-router';

import {KEYS} from '../../common/constants/localStorage';
import {loginComplete} from '../../common/actions/user.action';
import {CHANGE_ROUTE, REDIRECT_FROM_LOGIN} from '../../common/actions/navigation.action';

import Dashboard from '../Dashboard';
import StartScreen from '../StartScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
    this._handleStoreChange = this._handleStoreChange.bind(this);
    this._handleNavigationChange = this._handleNavigationChange.bind(this);
    this._verifyAuth = this._verifyAuth.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._handleStoreChange);
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
    this.unsubscribe();
  }

  _handleStoreChange() {
    var user_reducer = this.props.store.getState().user_reducer;
    var navigation_reducer = this.props.store.getState().navigation_reducer;
    // var notify_reducer = this.props.store.getState().notify_reducer;

    if (user_reducer.profile && user_reducer.profile.status === 'authenticated') {
      localStorage[KEYS.USER_PROFILE] = JSON.stringify(user_reducer.profile);
    } else {
      delete localStorage[KEYS.USER_PROFILE];
    }

    this._handleNavigationChange(navigation_reducer);
    // this._handleNotifyChange(notify_reducer);
  }

  _handleNavigationChange(navigation_reducer) {
    switch (navigation_reducer.type) {
      case CHANGE_ROUTE:
      case REDIRECT_FROM_LOGIN:
        return navigation_reducer.route && hashHistory.replace(navigation_reducer.route);
    }
  }

  _verifyAuth(nextState, replace) {
    var user_reducer = this.props.store.getState().user_reducer;
    if (!user_reducer.profile || user_reducer.profile.status !== 'authenticated') {
      replace({
        pathname: '/',
        state: {nextPathname: nextState.location.pathname}
      });
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route name="root" path="/" component={StartScreen}/>
        <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this._verifyAuth}/>
      </Router>
    );
  }
}