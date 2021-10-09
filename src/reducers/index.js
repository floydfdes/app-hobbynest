import { combineReducers } from "redux";

import authReducer from "./auth";
import hobby from "./hobby";

export const reducers = combineReducers({ authReducer, hobby });
