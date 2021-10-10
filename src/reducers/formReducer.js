import { UPDATE_HOBBY, CREATE_NEW_HOBBY } from "../constants/actionTypes";

const formReducer = (state = { currentId: null }, action) => {
  switch (action) {
    case CREATE_NEW_HOBBY:
      return { ...state, currentId: action?.data };
    case UPDATE_HOBBY:
      return { ...state, currentId: action?.data };
    default:
      return state;
  }
};

export default formReducer;
