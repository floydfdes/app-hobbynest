import { CLEAR_LOADING, SET_LOADING } from '../Constants/actionTypes';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case SET_LOADING:
            return true;
        case CLEAR_LOADING:
            return false;
        default:
            return state;
    }
};

export default loadingReducer;
