import authReducer from "./auth";
import { combineReducers } from "redux";
import formReducer from "./formReducer";
import hobby from "./hobby";
import toastNotificationReducer from "./toastNotificationReducer";

export const reducers = combineReducers({
  authReducer,
  hobby,
  formReducer,
  toastNotificationReducer
});
