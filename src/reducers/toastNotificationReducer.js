import {
  NOTIFY_CREATE,
  NOTIFY_DELETE,
  NOTIFY_ERROR,
  NOTIFY_SIGNUP,
  NOTIFY_SUCCESS,
  NOTIFY_UPDATE,
} from '../Constants/actionTypes';

const toastNotificationReducer = (
  state = { message: null, color: null },
  action,
) => {
  const { type, payload } = action;
  if (
    [
      NOTIFY_CREATE,
      NOTIFY_UPDATE,
      NOTIFY_DELETE,
      NOTIFY_SIGNUP,
      NOTIFY_ERROR,
      NOTIFY_SUCCESS,
    ].includes(type)
  ) {
    return {
      ...state,
      message: payload?.message,
      color: payload?.color,
    };
  }
  return state;
};

export default toastNotificationReducer;
