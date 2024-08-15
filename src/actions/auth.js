import * as api from '../api/index.js';

import { AUTH } from '../constants/actionTypes';
import { notifySignup } from './toastNotifications';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'New account created', color: 'info' }));
    history('/');
  } catch (error) {
    console.log(error);
  }
};
export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history('/');
  } catch (error) {
    return error;
  }
};
export const editUser = (id, formData, history) => async (dispatch) => {
  try {
    const { data } = await api.editUser(id, formData);
    dispatch({ type: AUTH, data });
    dispatch(
      notifySignup({ message: 'User successfully updated', color: 'info' }),
    );
    history('/');
  } catch (error) {
    return error;
  }
};

export const resetPassword = (id, formData, history) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(id, formData);
    dispatch({ type: AUTH, data });
    dispatch(
      notifySignup({ message: 'Password updated successfully', color: 'info' }),
    );
    history('/');
  } catch (error) {
    return error;
  }
};

export const deleteUser = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.deleteUser(id);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'User has been deleted', color: 'info' }));
    history('/');
  } catch (error) {
    return error;
  }
};
