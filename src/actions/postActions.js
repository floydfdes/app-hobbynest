import * as api from '../api/index';

import {
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_ONE,
  LIKE,
  UPDATE,
} from '../constants/actionTypes';
import { clearLoading, setLoading } from './loading';
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

    const tagsArray = post.tags.split(',').map((tag) => tag.trim());
    const updatedPost = { ...post, tags: tagsArray };

    const { data } = await api.createPost(updatedPost);
    dispatch({ type: CREATE, payload: data });
    dispatch(notifyCreate({ message: 'Post created successfully', color: 'success' }));
    history('/posts');
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const updatePost = (id, post, history) => async (dispatch) => {
  try {
    const filteredPost = {
      ...post,
      likes: Array.isArray(post.likes) ? post.likes : [],
    };
    delete filteredPost.id;
    delete filteredPost.creator;
    delete filteredPost.creatorName;

    const { data } = await api.updatePost(id, filteredPost);

    dispatch({ type: UPDATE, payload: data });
    dispatch(
      notifyUpdate({ message: 'Post updated successfully', color: 'success' }),
    );
    history('/posts');
  } catch (error) {
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
