import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import authReducer from './authReducer';
import formReducer from './formReducer';
import loadingReducer from './loadingReducer';
import hobby from './postReducer';
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
