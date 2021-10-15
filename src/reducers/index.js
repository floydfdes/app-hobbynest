import { combineReducers } from "redux";

import authReducer from "./auth";
import hobby from "./hobby";
import formReducer from "./formReducer";
import toastNotificationReducer from "./toastNotificationReducer";

export const reducers = combineReducers({
  authReducer,
  hobby,
  formReducer,
  toastNotificationReducer,
});
