import {logout} from '../actions/user.action';

/**
 * handle any requests that responded with 403
 */
export const handleForbidden = store => next => action => {
  if (action.error && isForbidden(action.error)) {
    store.dispatch(logout());
    // todo: swap console with snackbar notification
    console.error('Your token has expired, please log in');
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
    // todo: swap console with snackbar notification
    console.error(action.error.message || 'Whoops, an error occurred');
  }
  return next(action);
};
