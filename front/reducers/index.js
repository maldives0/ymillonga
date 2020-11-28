import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE: return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});
// (state, action) => {
//     switch (action.type) {
//         case HYDRATE:
//             console.log('HYDRATE', action);
//             return action.payload;
//         default: {
//             const combineReducer =
//                 combineReducers({
//                     user, post,
//                 });
//             return combineReducer(state, action);
//         }
//     }
// };
export default rootReducer;