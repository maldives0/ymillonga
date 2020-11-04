import produce from 'immer';

export const initialState = {
    loadUserLoading: false,
    loadUserDone: false,
    loadUserError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
    logOutLoading: false,
    logOutDone: false,
    logOutError: null,
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    followLoading: false,
    followDone: false,
    followError: null,
    unfollowLoading: false,
    unfollowDone: false,
    unfollowError: null,
    loadFollowingsLoading: false,
    loadFollowingsDone: false,
    loadFollowingsError: null,
    loadFollowersLoading: false,
    loadFollowersDone: false,
    loadFollowersError: null,
    changeNicknameLoading: false,
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
};


export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

// const dummyUser = (data) => ({
//     ...data,
//     nickname: 'momo',
//     id: 1,
//     Posts: [{ id: 1 }],
//     Followings: [{ nickname: 'aa' }, { nickname: 'bb' }, { nickname: 'cc' },],
//     Followers: [{ nickname: 'aa' }, { nickname: 'bb' }, { nickname: 'cc' },],
// });

export const logInRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data,
    }
}
export const logOutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
    }
}
export const signUpRequestAction = () => {
    return {
        type: SIGN_UP_REQUEST,
    }
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_FOLLOWINGS_REQUEST:
            draft.loadFollowingsLoading = true;
            draft.loadFollowingsDone = false;
            draft.loadFollowingsError = null;
            break;

        case LOAD_FOLLOWINGS_SUCCESS:
            draft.loadFollowingsLoading = false;
            draft.loadFollowingsDone = true;
            draft.me.Followings = action.data;
            break;
        case LOAD_FOLLOWINGS_FAILURE:
            draft.loadFollowingsLoading = false;
            draft.loadFollowingsError = action.error;
            break;
        case LOAD_FOLLOWERS_REQUEST:
            draft.loadFollowersLoading = true;
            draft.loadFollowersDone = false;
            draft.loadFollowersError = null;
            break;

        case LOAD_FOLLOWERS_SUCCESS:
            draft.loadFollowersLoading = false;
            draft.loadFollowersDone = true;
            draft.me.Followers = action.data;
            break;
        case LOAD_FOLLOWERS_FAILURE:
            draft.loadFollowersLoading = false;
            draft.loadFollowersError = action.error;
            break;
        case LOAD_MY_INFO_REQUEST:
            draft.loadUserLoading = true;
            draft.loadUserDone = false;
            draft.loadUserError = null;
            break;

        case LOAD_MY_INFO_SUCCESS:
            draft.loadUserLoading = false;
            draft.loadUserDone = true;
            draft.me = action.data;
            break;
        case LOAD_MY_INFO_FAILURE:
            draft.loadUserLoading = false;
            draft.loadUserError = action.error;
            break;
        case FOLLOW_REQUEST:
            draft.followLoading = true;
            draft.followDone = false;
            draft.followError = null;
            break;

        case FOLLOW_SUCCESS:
            draft.followLoading = false;
            draft.followDone = true;
            draft.me.Followings.push({ id: action.data.UserId });
            break;
        case FOLLOW_FAILURE:
            draft.followLoading = false;
            draft.followError = action.error;
            break;
        case UNFOLLOW_REQUEST:
            draft.unfollowLoading = true;
            draft.unfollowDone = false;
            draft.unfollowError = null;
            break;

        case UNFOLLOW_SUCCESS:
            draft.unfollowLoading = false;
            draft.unfollowDone = true;
            draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data.UserId);
            break;
        case UNFOLLOW_FAILURE:
            draft.unfollowLoading = false;
            draft.unfollowError = action.error;
            break;
        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInDone = false;
            draft.logInError = null;
            break;

        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.me = action.data;
            draft.logInDone = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutDone = false;
            draft.logOutError = null;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;

        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;

        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;

        case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;

        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameLoading = true;
            draft.changeNicknameDone = false;
            draft.changeNicknameError = null;
            break;

        case CHANGE_NICKNAME_SUCCESS:
            draft.me.nickname = action.data.nickname;
            draft.changeNicknameLoading = false;
            draft.changeNicknameDone = true;
            break;
        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameLoading = false;
            draft.changeNicknameError = action.error;
            break;
        case ADD_POST_TO_ME:

            draft.me.Posts.unshift({ id: action.data });
            break;
        case REMOVE_POST_OF_ME:

            draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
            break;

        default:
            break;

    }//switch
});//produce     


export default reducer;