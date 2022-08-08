export const USER_POST_REQUEST_LOADING = "USER_POST_REQUEST_LOADING";
export const USER_POST_REQUEST_SUCCESS = "USER_POST_REQUEST_SUCCESS";
export const USER_POST_REQUEST_FAILURE = "USER_POST_REQUEST_FAILURE";

export const userPostRequestLoading = () => ({
  type: USER_POST_REQUEST_LOADING,
});

export const userPostRequestSuccess = (post) => ({
  type: USER_POST_REQUEST_SUCCESS,
  post,
});

export const userPostRequestFailure = () => ({
  type: USER_POST_REQUEST_FAILURE,
});
