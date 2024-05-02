import {
  CREATE_NEW_COMMENT,
  CREATE_NEW_HOBBY,
  DELETE_COMMENT,
  DISLIKE_COMMENT,
  FETCH,
  LIKE_COMMENT,
  UPDATE_COMMENT,
  UPDATE_HOBBY,
} from "../constants/actionTypes";

const formReducer = (state = { formData: null }, action) => {

  switch (action.type) {
    case CREATE_NEW_HOBBY:
      return { ...state, formData: action?.payload };
    case UPDATE_HOBBY:
      return { ...state, formData: action?.payload };
    case FETCH:
      return { ...state, formData: action?.payload };
    case CREATE_NEW_COMMENT:
      return { ...state, formData: action?.payload };
    case UPDATE_COMMENT:
      return { ...state, formData: action?.payload };
    case DELETE_COMMENT:
      return { ...state, formData: action?.payload };
    case LIKE_COMMENT:
    case DISLIKE_COMMENT:
      return { ...state, formData: action?.payload };
    default:
      return state;
  }
};

export default formReducer;
