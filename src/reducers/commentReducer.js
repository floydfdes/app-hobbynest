import {
  CREATE_NEW_COMMENT,
  DELETE_COMMENT,
  DISLIKE_COMMENT,
  LIKE_COMMENT,
  UPDATE_COMMENT,
} from '../Constants/actionTypes';

const comments = (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_COMMENT:
      return [...state, action.payload];
    case UPDATE_COMMENT:
      return state.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment,
      );
    case DELETE_COMMENT:
      return state.filter((comment) => comment._id !== action.payload);
    case LIKE_COMMENT:
    case DISLIKE_COMMENT:
      return state.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment,
      );
    default:
      return state;
  }
};

export default comments;
