import React, {Component} from 'react';
import {connect} from 'react-redux';

import {login, updateLoginField, validateProfile} from '../../common/actions/user.action';
import {BG_IMAGES} from '../../common/constants/backgrounds';

import Login from '../../components/Login/Login';

class StartScreen extends Component {
  constructor(props) {
    super(props);
    this._handleFieldChange = this._handleFieldChange.bind(this);
    this._handleLogin = this._handleLogin.bind(this);
  }

  componentDidMount() {
    this._setBackGround();
    componentHandler.upgradeDom();
  }

  componentWillMount() {
    this.props.dispatch(validateProfile());
  }

  _handleLogin() {
    var login_profile = this.props.user.login_profile;
    if (!login_profile.email || !login_profile.password) {
      this._showSnackBar('Email and Password are required!');
      return;
    }

    this.props.dispatch(login(login_profile.email, login_profile.password));
  }

  _handleFieldChange(field, event) {
    this.props.dispatch(updateLoginField(field, event.target.value));
  }

  _setBackGround() {
    function getRandomBGPhoto() {
      var photo_number = Math.floor(Math.random() * BG_IMAGES.length);
      return BG_IMAGES[photo_number];
    }

    let login_container = document.getElementById('login-container');
    login_container.style.background = 'url(' + getRandomBGPhoto() + ') top center no-repeat';
    login_container.style.backgroundSize = 'cover';
  }

  _showSnackBar(message) {
    var data = {message: message, timeout: 2500};
    var snackbarContainer = document.querySelector('#login-snack-bar');
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }

  render() {
    let {user} = this.props;

    return (
      <Login loading={user.loading}
             email={user.login_profile.email}
             password={user.login_profile.password}
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
