import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log('loggerMiddleware', action);
    return next(action);
};
const configureStore = (context) => {
    const middleware = [];
    console.log('context', context);
    const enhancer = process.env.NODE_ENV === 'production' ?
        compose(applyMiddleware) :
        composeWithDevTools(applyMiddleware(loggerMiddleware)
        );
    const store = createStore(reducer, enhancer);
    return store;
};
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development'
});
export default wrapper;