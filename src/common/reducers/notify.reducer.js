import {
  REMOVE_SNACK,
  SHOW_SNACK
} from '../actions/notify.action';

export default (state = {}, action) => {
  switch (action.type) {
    case REMOVE_SNACK:
      return removeSnack(state, action);
    case SHOW_SNACK:
      return showSnack(state, action);
    default:
      return {};
  }
}

function removeSnack(state, action) {
  return Object.assign({}, state, {
    type: REMOVE_SNACK,
    message: action.message
  });
}

function showSnack(state, action) {
  return Object.assign({}, state, {
    type: SHOW_SNACK,
    message: action.message
  });
}
