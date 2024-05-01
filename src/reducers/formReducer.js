import { CREATE_NEW_HOBBY, FETCH, UPDATE_HOBBY } from "../constants/actionTypes";

const formReducer = (state = { formData: null }, action) => {
  switch (action.type) {
    case CREATE_NEW_HOBBY:
      return { ...state, formData: action?.payload };
    case UPDATE_HOBBY:
      return { ...state, formData: action?.payload };
    case FETCH:
      return { ...state, formData: action?.payload };
    default:
      return state;
  }
};

export default formReducer;
