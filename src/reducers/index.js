import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import authReducer from './auth';
import formReducer from './formReducer';
import hobby from './hobby';
import loadingReducer from './loadingReducer';
import toastNotificationReducer from './toastNotificationReducer';

const reducers = combineReducers({
  authReducer,
  hobby,
  formReducer,
  toastNotificationReducer,
  loading: loadingReducer,
  admin: adminReducer,
});

export default reducers;
