import {
  userPostRequestFailure,
  userPostRequestLoading,
  userPostRequestSuccess,
} from "../Actions/UserPostRequest";

export function userPostsFetchData(id) {
  return (dispatch) => {
    dispatch(userPostRequestLoading());

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (id > 10 || data === undefined) {
          dispatch(userPostRequestFailure());
        } else {
          dispatch(userPostRequestSuccess(data));
        }
      });
  };
}
