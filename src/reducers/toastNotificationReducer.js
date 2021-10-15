import {
  NOTIFY_CREATE,
  NOTIFY_UPDATE,
  NOTIFY_DELETE,
  NOTIFY_SIGNUP,
} from "../constants/actionTypes";

const toastNotificationReducer = (
  state = { message: null, color: null },
  action
) => {
  switch (action.type) {
    case NOTIFY_CREATE:
      return {
        ...state,
        message: action?.payload.message,
        color: action?.payload.color,
      };
    case NOTIFY_UPDATE:
      return {
        ...state,
        message: action?.payload.message,
        color: action?.payload.color,
      };
    case NOTIFY_DELETE:
      return {
        ...state,
        message: action?.payload.message,
        color: action?.payload.color,
      };
    case NOTIFY_SIGNUP:
      return {
        ...state,
        message: action?.payload.message,
        color: action?.payload.color,
      };
    default:
      return state;
  }
};

export default toastNotificationReducer;
