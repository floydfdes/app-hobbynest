import * as api from '../api/index';

import { FETCH_POSTS, FETCH_USERS } from '../constants/actionTypes';

import { notifyError } from './toastNotifications';

const handleError = (dispatch, error) => {
    dispatch(notifyError({ message: error.message, color: 'error' }));
};

export const fetchUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        dispatch({ type: FETCH_USERS, payload: data });
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const fetchPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
        handleError(dispatch, error);
    }
};

export const updatePost = (postId, updatedData) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(postId, updatedData);
        dispatch({ type: FETCH_POSTS, payload: data });
    } catch (error) {
        handleError(dispatch, error);
    }
};

// Delete a specific post
export const deletePost = (postId) => async (dispatch) => {
    try {
        await api.deletePost(postId);
        dispatch(fetchPosts()); // Refresh posts after deletion
        dispatch(notifySuccess({ message: 'Post deleted successfully!', color: 'success' }));
    } catch (error) {
        handleError(dispatch, error);
    }
};

// Delete a specific user
export const deleteUser = (userId) => async (dispatch) => {
    try {
        await api.deleteUser(userId);
        dispatch(fetchUsers()); // Refresh users after deletion
        dispatch(notifySuccess({ message: 'User deleted successfully!', color: 'success' }));
    } catch (error) {
        handleError(dispatch, error);
    }
};