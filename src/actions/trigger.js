import {
  CREATE_NEW_POST,
  FETCH,
  UPDATE_POST,
} from '../constants/actionTypes';

export const createNewPost = (data, history) => async (dispatch) => {
  try {
    await dispatch({ type: CREATE_NEW_POST, payload: data });
    history('/posts/create');
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};

export const editPost = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_POST, payload: data });
    history('/posts/update');
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};

export const viewPost = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: FETCH, payload: data });
    history(`/posts/view/${data.id}`);
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};
