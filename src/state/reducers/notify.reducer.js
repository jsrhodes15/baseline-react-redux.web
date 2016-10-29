import {
  CLEAR_SNACK_MESSAGE,
  SHOW_SNACK
} from '../actions/notify.action';

export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_SNACK_MESSAGE:
      return clearSnackMessage(state, action);
    case SHOW_SNACK:
      return showSnack(state, action);
    default:
      return {};
  }
}

function clearSnackMessage(state, action) {
  return Object.assign({}, state, {
    type: CLEAR_SNACK_MESSAGE,
    message: action.message
  });
}

function showSnack(state, action) {
  return Object.assign({}, state, {
    type: SHOW_SNACK,
    message: action.message
  });
}
