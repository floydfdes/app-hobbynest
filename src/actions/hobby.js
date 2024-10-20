import * as api from '../api/index';
import { clearLoading, setLoading } from './loading';

import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
  LIKE,
  UPDATE,
} from '../constants/actionTypes';
import {
  notifyCreate,
  notifyDelete,
  notifyError,
  notifyUpdate,
} from './toastNotifications';

const handleError = (dispatch, error) => {
  dispatch(notifyError({ message: error?.message, color: 'error' }));
};

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
    return data;
  } catch (error) {
    handleError(dispatch, error);
    return [];
  } finally {
    dispatch(clearLoading());
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.fetchPost(id);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const creatorName = JSON.parse(localStorage.getItem('profile')).result.firstName;
    const { data } = await api.createPost({ ...post, creatorName });
    dispatch({ type: CREATE, payload: data });
    dispatch(notifyCreate({ message: 'Post created successfully', color: 'success' }));
    history('/hobbies');
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const updatePost = (id, post, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
    dispatch(
      notifyUpdate({ message: 'Post updated successfully', color: 'success' }),
    );
    history('/hobbies');
  } catch (error) {
    // Remove this line:
    // console.log(error?.message);
    dispatch(notifyError({ message: error?.message, color: 'error' }));
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
    dispatch(notifyDelete({ message: 'Post deleted', color: 'error' }));
  } catch (error) {
    handleError(dispatch, error);
  }
};
