import SnackBar from 'node-snackbar';
import {INFO} from '../constants/snackbar';

export const REMOVE_SNACK = 'REMOVE_SNACK';
export const SHOW_SNACK = 'SHOW_NOTIFY';

export function removeSnack() {
  return dispatch => {
    let dispatch_payload = {
      type: REMOVE_SNACK,
      message: null
    };

    dispatch(dispatch_payload);
  }
}

export function showSnack(payload) {
  return dispatch => {
    let dispatch_payload = {
      type: SHOW_SNACK,
      message: payload.message
    };

    let options = payload.type || INFO;
    let pos = payload.pos || options.pos;

    SnackBar.show({
      text: payload.message,
      textColor: '#FFFFFF',
      pos: pos,
      backgroundColor: options.background,
      duration: options.duration,
      actionTextColor: '#FFFFFF',
      showActionButton: options.showActionButton
    });

    dispatch(dispatch_payload);
    dispatch(removeSnack());
  }
}
