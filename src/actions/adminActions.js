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
