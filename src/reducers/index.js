import { combineReducers } from "redux";

import authReducer from "./auth";
import hobby from "./hobby";
import formReducer from "./formReducer";

export const reducers = combineReducers({ authReducer, hobby, formReducer });
