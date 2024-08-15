import { combineReducers } from 'redux';
import authReducer from './auth';
import formReducer from './formReducer';
import hobby from './hobby';
import toastNotificationReducer from './toastNotificationReducer';

const reducers = combineReducers({
  authReducer,
  hobby,
  formReducer,
  toastNotificationReducer,
});

export default reducers;
