import {
  NOTIFY_CREATE,
  NOTIFY_DELETE,
  NOTIFY_ERROR,
  NOTIFY_SIGNUP,
  NOTIFY_UPDATE,
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


export const notifyError = (data) => async (dispatch) => {
  try {
    dispatch({ type: NOTIFY_ERROR, payload: data });
  } catch (error) {
    console.log(error);
  }
};