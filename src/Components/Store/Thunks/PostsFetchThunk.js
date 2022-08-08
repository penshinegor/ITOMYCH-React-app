import {
  loginRequestFailure,
  loginRequestLoading,
  loginRequestSuccess,
} from "../Actions/PostsRequestAction";

export function postsFetchData() {
  return (dispatch) => {
    dispatch(loginRequestLoading());

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => data.splice(0, 10))
      .then(
        (items) => {
          dispatch(loginRequestSuccess(items));
        },
        (error) => {
          dispatch(loginRequestFailure(error));
        }
      );
  };
}
