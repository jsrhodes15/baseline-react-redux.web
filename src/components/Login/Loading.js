import React, {PropTypes} from 'react';
import classNames from 'classnames';

const Loading = ({loading}) => {

  var loadingClass = classNames('dissolve-animation', {
    'hide': !loading
  });

  return (
    <div className={loadingClass}>
      <div id="loading_indeterminate" className="mdl-progress mdl-js-progress mdl-progress__indeterminate">
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;
