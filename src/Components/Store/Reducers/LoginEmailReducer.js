import { LOGIN_EMAIL } from "../Actions/LoginEmailAction";

const initialState = {
  email: "",
};

export const loginEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_EMAIL:
      return {
        ...state,
        email: action.emailValue,
      };
    default:
      return state;
  }
};
