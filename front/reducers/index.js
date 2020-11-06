import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from 'redux';
import user from './user';
import post from './post';



const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combineReducer = combineReducers({
                user,
                post,
            });
            return combineReducer(state, action);
        }
    }

};
//const rootReducer =combineReducers({
//     user,
//     post,
// });를 더 확장 가능한 꼴로 만든 것

export default rootReducer;