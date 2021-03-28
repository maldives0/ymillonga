import { combineReducers } from 'redux';
import user, { IUserReducerState } from './user';
import post, { IPostReducerState } from './post';

export interface IReducerState {
  user: IUserReducerState;
  post: IPostReducerState;
}
const rootReducer = combineReducers({
  user,
  post,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
