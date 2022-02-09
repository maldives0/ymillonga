import { combineReducers } from "redux";
import user, { IUserReducerState } from "./user";
import post, { IPostReducerState } from "./post";

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
