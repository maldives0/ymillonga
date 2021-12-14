import { configureStore, combineReducers } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { userApi } from "../services/user";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
});
export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (gDM) => gDM().concat(userApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];