import { CREATE_NEW_HOBBY, FETCH, UPDATE_HOBBY } from "../constants/actionTypes";

export const createNewHobby = (data, history) => async (dispatch) => {
  try {
    await dispatch({ type: CREATE_NEW_HOBBY, payload: data });
    history("/hobbies/create");
  } catch (error) {
    console.log(error);
  }
};

export const editHobby = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOBBY, payload: data });
    history("/hobbies/update");
  } catch (error) {
    console.log(error);
  }
};

export const viewHobby = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: FETCH, payload: data });
    history(`/hobbies/view/${data.id}`);
  } catch (error) {
    console.log(error);
  }
};
