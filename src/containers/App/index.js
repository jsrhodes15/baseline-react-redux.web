/**
 * This is the top level container component
 *
 *  In this component, we define our Routes and handle any app level navigation, such as -
 *    redirecting on logout,
 *    redirecting if the user was previously authenticated,
 *    verifying authentication when navigating to routes, etc..
 *
 */
import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Dashboard from '../Dashboard';
import StartScreen from '../StartScreen';

export default class App extends Component {
  constructor(props) {
    document.title = 'My App';

    super(props);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleVerifyAuth = this.handleVerifyAuth.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this.handleStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleStoreChange() {
    // behavior on store change would happen here
  }

  handleVerifyAuth(nextState, replace) {
    var user = this.props.store.getState().userState;
    if (!user.profile || user.profile.status !== 'authenticated') {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }

  render() {
    /**
     * Create an enhanced history that syncs navigation events with the store
     */
    let enhanced_history = syncHistoryWithStore(hashHistory, this.props.store);

    return (
      <Router history={enhanced_history}>
        <Route name="root" path="/" component={StartScreen} />
        <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this.handleVerifyAuth} />
      </Router>
    );
  }
}