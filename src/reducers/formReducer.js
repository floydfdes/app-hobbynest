import {
  CREATE_NEW_COMMENT,
  CREATE_NEW_POST,
  DELETE_COMMENT,
  DISLIKE_COMMENT,
  FETCH,
  FETCH_ONE,
  LIKE_COMMENT,
  UPDATE_COMMENT,
  UPDATE_POST,
} from '../constants/actionTypes';

const formReducer = (state = { formData: null }, action) => {
  switch (action.type) {
    case CREATE_NEW_POST:
    case UPDATE_POST:
    case FETCH:
    case FETCH_ONE:
    case CREATE_NEW_COMMENT:
    case UPDATE_COMMENT:
    case DELETE_COMMENT:
    case LIKE_COMMENT:
    case DISLIKE_COMMENT:
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export default formReducer;
