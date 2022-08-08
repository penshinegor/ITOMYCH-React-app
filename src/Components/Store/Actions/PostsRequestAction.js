export const POSTS_REQUEST_LOADING = "POSTS_REQUEST_LOADING";
export const POSTS_REQUEST_SUCCESS = "POSTS_REQUEST_SUCCESS";
export const POSTS_REQUEST_FAILURE = "POSTS_REQUEST_FAILURE";

export const loginRequestLoading = () => ({
  type: POSTS_REQUEST_LOADING,
});

export const loginRequestSuccess = (posts) => ({
  type: POSTS_REQUEST_SUCCESS,
  posts,
});

export const loginRequestFailure = (error) => ({
  type: POSTS_REQUEST_FAILURE,
  error,
});
