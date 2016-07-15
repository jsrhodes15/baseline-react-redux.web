import {logout} from '../actions/user.action';
import {showSnack} from '../actions/notify.action';
import {ERROR} from '../constants/snackbar_options';

/**
 * handle any requests that responded with 403
 */
export const handleForbidden = store => next => action => {
  if (action.error && isForbidden(action.error)) {
    store.dispatch(logout());
    store.dispatch(showSnack({message: 'Your token has expired, please log in', type: ERROR}));
  }
  return next(action);
};

/**
 * is this a 403 error
 */
const isForbidden = (error = {}) => {
  return error.response && error.response.status === 403;
};

/**
 * notify users of action errors - ignore 403
 */
export const notifyError = store => next => action => {
  if (action.error && !isForbidden(action.error)) {
    store.dispatch(showSnack({message: action.error.message || 'Whoops, an error occurred', type: ERROR}));
  }
  return next(action);
};
