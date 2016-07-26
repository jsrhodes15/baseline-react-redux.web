import React, {Component} from 'react';
import {connect} from 'react-redux';

import {login, validateProfile} from '../../common/actions/user.action';
import {showSnack} from '../../common/actions/notify.action';
import {BG_IMAGES} from '../../common/constants/backgrounds';
import {WARN} from '../../common/constants/snackbar';

import Login from './Login';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this._handleFieldChange = this._handleFieldChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
    this._setStateField = this._setStateField.bind(this);

    // manage state for login fields
    this.state = {email: '', password: ''};
  }

  componentDidMount() {
    this._setBackGround();
    componentHandler.upgradeDom();
  }

  componentWillMount() {
    // set state from redux
    this._setStateField('email', this.props.user.login_profile.email);
    this.props.dispatch(validateProfile());
  }

  _handleLogin() {
    if (!this.state.email || !this.state.password) {
      this.props.dispatch(showSnack({message: 'Email and Password are required!', type: WARN}));
      return;
    }

    this.props.dispatch(login(this.state.email, this.state.password));
  }

  _handleFieldChange(field, event) {
    this._setStateField(field, event.target.value);
  }

  /**
   * randomly selects a background on refresh
   */
  _setBackGround() {
    function getRandomBGPhoto() {
      let photo_number = Math.floor(Math.random() * BG_IMAGES.length);
      return BG_IMAGES[photo_number];
    }

    let login_container = document.getElementById('login-container');
    login_container.style.background = 'url(' + getRandomBGPhoto() + ') top center no-repeat';
    login_container.style.backgroundSize = 'cover';
  }

  _setStateField(field, value) {
    let new_state = Object.assign({}, this.state);
    new_state[field] = value;
    this.setState(new_state);
  }

  render() {
    let {user} = this.props;

    return (
      <Login loading={user.loading}
             email={this.state.email}
             password={this.state.password}
             handleFieldChange={this._handleFieldChange}
             handleLogin={this._handleLogin}/>
    );
  }
}

function mapStateToProps(state) {
  const {user} = state;
  return {
    user
  };
}

export default connect(mapStateToProps)(StartScreen);
