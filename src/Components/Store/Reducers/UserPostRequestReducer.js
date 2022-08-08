import {
  USER_POST_REQUEST_FAILURE,
  USER_POST_REQUEST_LOADING,
  USER_POST_REQUEST_SUCCESS,
} from "../Actions/UserPostRequest";

const initialState = {
  error: false,
  loading: false,
  items: {},
};

export const userPostRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_POST_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_POST_REQUEST_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        items: action.post,
      };
    case USER_POST_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
