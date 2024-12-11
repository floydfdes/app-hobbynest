import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import authReducer from './authReducer';
import formReducer from './formReducer';
import loadingReducer from './loadingReducer';
import postReducer from './postReducer';
import toastNotificationReducer from './toastNotificationReducer';

const reducers = combineReducers({
  authReducer,
  posts: postReducer,
  formReducer,
  toastNotificationReducer,
  loading: loadingReducer,
  admin: adminReducer,
});

export default reducers;
