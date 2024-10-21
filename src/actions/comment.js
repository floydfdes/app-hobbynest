import * as api from '../api/index';
import { clearLoading, setLoading } from './loading';

import {
  CREATE_NEW_COMMENT,
  DELETE_COMMENT,
  DISLIKE_COMMENT,
  LIKE_COMMENT,
  UPDATE_COMMENT,
} from '../constants/actionTypes';

import { notifyError } from './toastNotifications';

const handleError = (dispatch, error) => {
  dispatch(notifyError({ message: error.message, color: 'error' }));
};

export const createNewComment = (postId, commentData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.createComment(postId, { content: commentData });
    dispatch({ type: CREATE_NEW_COMMENT, payload: data });
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const updateComment = (postId, commentId, updatedCommentData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.updateComment(postId, commentId, {
      content: updatedCommentData,
    });
    dispatch({ type: UPDATE_COMMENT, payload: data });
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await api.deleteComment(postId, commentId);
    dispatch({ type: DELETE_COMMENT, payload: data });
  } catch (error) {
    handleError(dispatch, error);
  } finally {
    dispatch(clearLoading());
  }
};

export const likeComment = (postId, commentId) => async (dispatch) => {
  try {
    const { data } = await api.likeComment(postId, commentId);
    dispatch({ type: LIKE_COMMENT, payload: data?.post });
  } catch (error) {
    handleError(dispatch, error);
  }
};

export const dislikeComment = (postId, commentId) => async (dispatch) => {
  try {
    const { data } = await api.dislikeComment(postId, commentId);
    dispatch({ type: DISLIKE_COMMENT, payload: data?.post });
  } catch (error) {
    handleError(dispatch, error);
  }
};
