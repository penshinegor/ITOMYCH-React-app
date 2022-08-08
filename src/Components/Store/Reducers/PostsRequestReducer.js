import {
  POSTS_REQUEST_LOADING,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_FAILURE,
} from "../Actions/PostsRequestAction";

const initialState = {
  error: null,
  loading: false,
  items: [],
};

export const postRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST_LOADING:
      return {
        ...state,
        loading: true,
      };
    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        items: action.posts,
      };
    case POSTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
