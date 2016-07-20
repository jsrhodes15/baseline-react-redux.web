import {show} from 'js-snackbar';
import {INFO} from '../constants/snackbar';

export const CLEAR_SNACK_MESSAGE = 'CLEAR_SNACK_MESSAGE';
export const SHOW_SNACK = 'SHOW_SNACK';

/**
 * clears the snack message from our store
 */
export function clearSnackMessage() {
  return dispatch => {
    let dispatch_payload = {
      type: CLEAR_SNACK_MESSAGE,
      message: null
    };

    dispatch(dispatch_payload);
  }
}

/**
 * displays a snack bar notification
 */
export function showSnack(payload) {
  return dispatch => {
    let dispatch_payload = {
      type: SHOW_SNACK,
      message: payload.message
    };

    let options = payload.type || INFO;
    let pos = payload.pos || options.pos;

    show({
      text: payload.message,
      textColor: '#FFFFFF',
      pos: pos,
      backgroundColor: options.background,
      duration: options.duration,
      actionTextColor: '#FFFFFF',
      showAction: options.showAction
    });

    dispatch(dispatch_payload);
    dispatch(clearSnackMessage());
  }
}
