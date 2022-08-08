import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "@reduxjs/toolkit";
import { postRequestReducer } from "./Reducers/PostsRequestReducer";
import { loginEmailReducer } from "./Reducers/LoginEmailReducer";
import { userPostRequestReducer } from "./Reducers/UserPostRequestReducer";

const rootReducer = combineReducers({
  postRequestReducer,
  loginEmailReducer,
  userPostRequestReducer,
});

export default function configureStore() {
  let composeEnhancers = compose;
  if (process.env.NODE_ENV === "development") {
    composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
  }
  return createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));
}
