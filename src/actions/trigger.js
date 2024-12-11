import {
  CREATE_NEW_HOBBY,
  FETCH,
  UPDATE_HOBBY,
} from '../constants/actionTypes';

export const createNewHobby = (data, history) => async (dispatch) => {
  try {
    await dispatch({ type: CREATE_NEW_HOBBY, payload: data });
    history('/posts/create');
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};

export const editHobby = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOBBY, payload: data });
    history('/posts/update');
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};

export const viewHobby = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: FETCH, payload: data });
    history(`/posts/view/${data.id}`);
  } catch (error) {
    // Remove this line:
    // console.log(error);
  }
};
