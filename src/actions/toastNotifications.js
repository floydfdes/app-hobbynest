import {
  NOTIFY_CREATE,
  NOTIFY_UPDATE,
  NOTIFY_DELETE,
  NOTIFY_SIGNUP,
} from "../constants/actionTypes";

export const notifyCreate = (data) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const notifyUpdate = (data) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const notifyDelete = (data) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const notifySignup = (data) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_SIGNUP, payload: data });
  } catch (error) {
    console.log(error);
  }
};
