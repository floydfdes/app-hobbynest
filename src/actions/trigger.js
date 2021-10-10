import { CREATE_NEW_HOBBY, UPDATE_HOBBY } from "../constants/actionTypes";

export const createNewHobby = (data, history) => async (dispatch) => {
  try {
    await dispatch({ type: CREATE_NEW_HOBBY, payload: data });
    history.push("/hobbies/create");
  } catch (error) {
    console.log(error);
  }
};

export const editHobby = (data, history) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_HOBBY, payload: data });
    history.push("/hobbies/update");
  } catch (error) {
    console.log(error);
  }
};
