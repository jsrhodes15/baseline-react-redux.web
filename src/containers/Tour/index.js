'use strict';

import React, {Component, PropTypes} from 'react';

class Tour extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    return (
      <div>
        <div className="mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
          <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">Chicago Tour Module</span>
              <div className="mdl-layout-spacer"></div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Tour;