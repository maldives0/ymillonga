import produce from '../utils/produce';

export const initialState = {
    signupData: {},
    loginData: {},
    me: null,
    isLoggedIn: false,
    logInLoading: false,
    logInDone: false,
    logInError: null,

};
const dummyUser = (data) => ({
    ...data,
    nickname: 'momo',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: 'aa' }, { nickname: 'bb' }, { nickname: 'cc' },],
    Followers: [{ nickname: 'aa' }, { nickname: 'bb' }, { nickname: 'cc' },],
});


export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInDone = false;
            draft.me = dummyUser(action.data);
            draft.logInError = null;
            break;
        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.isLoggedIn = action.data.isLoggedIn;
            draft.me = dummyUser(action.data);
            draft.logInDone = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = acton.error;
            break;
        default:
            break;
    }
});
export default reducer;