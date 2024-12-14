import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS } from '../Constants/actionTypes';

const initialState = {
    users: [],
    posts: [],
    comments: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, users: action.payload };
        case FETCH_POSTS:
            return { ...state, posts: action.payload };
        case FETCH_COMMENTS:
            return { ...state, comments: action.payload };
        default:
            return state;
    }
};

export default adminReducer;
