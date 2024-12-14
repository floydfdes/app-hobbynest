import * as api from '../Api/index'; // Removed the .js extension

import { clearLoading, setLoading } from './loading';

import { AUTH } from '../Constants/actionTypes';
import { notifySignup } from './toastNotifications';

export const signUp = (formData, history) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'New account created', color: 'info' }));
    history('/');
  } catch (error) {
    // Handle error
  } finally {
    dispatch(clearLoading());
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history('/');
  } catch (error) {
    // Handle error
  } finally {
    dispatch(clearLoading());
  }
};

export const editUser = (id, formData, history) => async (dispatch) => {
  try {
    dispatch(setLoading());

    const disallowedKeys = ["role", "date", "_id", "password", "gender", "__v"];

    const filteredFormData = Object.fromEntries(
      Object.entries(formData).filter(([key]) => !disallowedKeys.includes(key))
    );

    const { data } = await api.editUser(id, filteredFormData);

    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'User successfully updated', color: 'info' }));
    history('/');
  } catch (error) {
    // Handle error
  } finally {
    dispatch(clearLoading());
  }
};

export const resetPassword = (id, formData, history) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.resetPassword(id, formData);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'Password updated successfully', color: 'info' }));
    history('/');
  } catch (error) {
    // Handle error
  } finally {
    dispatch(clearLoading());
  }
};

export const deleteUser = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.deleteUser(id);
    dispatch({ type: AUTH, data });
    dispatch(notifySignup({ message: 'User has been deleted', color: 'info' }));
    history('/');
  } catch (error) {
    // Error block
  }
};
