import { applyMiddleware, createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducer from "../reducers";
import rootSaga from "../sagas";

// const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//     console.log('loggerMiddleware', action);
//     return next(action);
// };
const configureStore = (context) => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middleware, logger))
      : composeWithDevTools(applyMiddleware(...middleware, logger));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};
const wrapper = createWrapper(configureStore, {
  debug: false,
  // debug: process.env.NODE_ENV === 'development'
});
export default wrapper;
