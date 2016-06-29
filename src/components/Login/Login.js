'use strict';

import React, {PropTypes} from 'react';
import {ENVIRONMENT} from '../../common/constants/environment';
import Loading from './Loading';

const Login = ({loading, email, password, handleFieldChange, handleLogin}) => (
  <div>
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <div id="login-container" className="android-content mdl-layout__content md">
        <div className="mdl-typography--text-center">
          <div className="mdl-layout__content login">
            <Loading loading={loading}/>

            <div className="login-header">
              <h5>Welcome</h5>
            </div>

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="text"
                     id="login_email"
                     value={email}
                     onChange={handleFieldChange.bind(null, 'email')}/>
              <label className="mdl-textfield__label" htmlFor="login_username">Email</label>
            </div>

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="password"
                     id="login_password"
                     value={password}
                     onChange={handleFieldChange.bind(null, 'password')}/>
              <label className="mdl-textfield__label" htmlFor="login_password">Password</label>
            </div>
            <br />

            <button id="login_button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
                    onClick={handleLogin}>
              Login
            </button>

            <div className="mdl-grid"></div>
            <div style={{color: '#448aff'}}
                 className="mdl-cell mdl-cell--2-col mdl-cell--10-offset">{ENVIRONMENT.VERSION}</div>

            <div id="login-snack-bar" className="snack-bar mdl-js-snackbar mdl-snackbar">
              <div className="mdl-snackbar__text"></div>
              <button className="mdl-snackbar__action" type="button"></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  loading: PropTypes.bool,
  email: PropTypes.string,
  password: PropTypes.string,
  handleFieldChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};

export default Login;
