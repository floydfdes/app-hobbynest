import * as api from "../api/index.js";

import {
    CREATE_NEW_COMMENT,
    DELETE_COMMENT,
    DISLIKE_COMMENT,
    LIKE_COMMENT,
    UPDATE_COMMENT
} from "../constants/actionTypes";

export const createNewComment = (postId, commentData) => async (dispatch) => {
    try {
        const { data } = await api.createComment(postId, commentData);
        dispatch({ type: CREATE_NEW_COMMENT, payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

export const updateComment = (postId, commentId, updatedCommentData) => async (dispatch) => {
    try {
        const { data } = await api.updateComment(postId, commentId, updatedCommentData);
        dispatch({ type: UPDATE_COMMENT, payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

export const deleteComment = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.deleteComment(postId, commentId);
        dispatch({ type: DELETE_COMMENT, payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

export const likeComment = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.likeComment(postId, commentId);
        dispatch({ type: LIKE_COMMENT, payload: data?.post });

    } catch (error) {
        console.log(error.message);
    }
};

export const dislikeComment = (postId, commentId) => async (dispatch) => {
    try {
        const { data } = await api.dislikeComment(postId, commentId);
        dispatch({ type: DISLIKE_COMMENT, payload: data?.post });

    } catch (error) {
        console.log(error.message);
    }
};
