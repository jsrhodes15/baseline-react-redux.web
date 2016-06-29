'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeRoute} from '../../common/actions/navigation.action';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    componentHandler.upgradeDom();
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {

    var {user_reducer} = this.props;

    return (
      <h2>dashboard</h2>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const {user_reducer} = state;
  return {
    user_reducer
  };
}

export default connect(mapStateToProps)(Dashboard);
