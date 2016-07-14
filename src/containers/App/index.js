/**
 * This is the top level container component
 *
 *  In this component, we define our Routes and handle any app level navigation, such as -
 *    redirecting on logout,
 *    redirecting if the user was previously authenticated,
 *    verifying authentication when navigating to routes, etc..
 *
 */
import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import Dashboard from '../Dashboard';
import StartScreen from '../StartScreen';

export default class App extends Component {
  constructor(props) {
    document.title = 'My App';

    super(props);
    this._handleStoreChange = this._handleStoreChange.bind(this);
    this._verifyAuth = this._verifyAuth.bind(this);
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._handleStoreChange);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  _handleStoreChange() {
    // behavior on store change would happen here
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
    /**
     * Create an enhanced history that syncs navigation events with the store
     */
    let enhanced_history = syncHistoryWithStore(hashHistory, this.props.store);

    return (
      <Router history={enhanced_history}>
        <Route name="root" path="/" component={StartScreen}/>
        <Route name="dashboard" path="dashboard" component={Dashboard} onEnter={this._verifyAuth}/>
      </Router>
    );
  }
}