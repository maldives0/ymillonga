import produce from '../utils/produce';


export const initialState = {

    loadMyInfoLoading: false, // 내정보 가져오기 시도중
    loadMyInfoDone: false,
    loadMyInfoError: null,
    loadUserLoading: false, // 다른유저 정보 가져오기 시도중
    loadUserDone: false,
    loadUserError: null,
    followLoading: false, // 팔로우 시도중
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    ignoreLoading: false, // 팔로우 시도중
    ignoreDone: false,
    ignoreError: null,
    unIgnoreLoading: false, // 언팔로우 시도중
    unIgnoreDone: false,
    unIgnoreError: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    leaveLoading: false, // 회원탈퇴 시도중
    leaveDone: false,
    leaveError: null,
    reportLoading: false, // 신고하기 시도중
    reportDone: false,
    reportError: null,
    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    removeFollowerLoading: false,
    removeFollowerDone: false,
    removeFollowerError: null,
    menuKeyLoading: false,
    menuKeyDone: false,
    menuKeyError: null,
    me: null,
    userInfo: null,//다른 유저

};
export const CHANGE_MENUKEY_REQUEST = 'CHANGE_MENUKEY_REQUEST';
export const CHANGE_MENUKEY_SUCCESS = 'CHANGE_MENUKEY_SUCCESS';
export const CHANGE_MENUKEY_FAILURE = 'CHANGE_MENUKEY_FAILURE';

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LEAVE_REQUEST = 'LEAVE_REQUEST';
export const LEAVE_SUCCESS = 'LEAVE_SUCCESS';
export const LEAVE_FAILURE = 'LEAVE_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const IGNORE_REQUEST = 'IGNORE_REQUEST';
export const IGNORE_SUCCESS = 'IGNORE_SUCCESS';
export const IGNORE_FAILURE = 'IGNORE_FAILURE';

export const UNIGNORE_REQUEST = 'UNIGNORE_REQUEST';
export const UNIGNORE_SUCCESS = 'UNIGNORE_SUCCESS';
export const UNIGNORE_FAILURE = 'UNIGNORE_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case CHANGE_MENUKEY_REQUEST:
            draft.menuKeyLoading = true;
            draft.menuKeyError = null;
            draft.menuKeyDone = false;
            break;
        case CHANGE_MENUKEY_SUCCESS:
            draft.menuKeyLoading = false;
            draft.me.menuKey = action.data.currentKey;
            draft.menuKeyDone = true;
            break;
        case CHANGE_MENUKEY_FAILURE:
            draft.menuKeyLoading = false;
            draft.menuKeyError = action.error;
            break;
        case LOAD_MY_INFO_REQUEST:
            draft.loadMyInfoLoading = true;
            draft.loadMyInfoError = null;
            draft.loadMyInfoDone = false;
            break;
        case LOAD_MY_INFO_SUCCESS:
            draft.loadMyInfoLoading = false;
            draft.loadMyInfoDone = true;
            draft.me = action.data;
            break;
        case LOAD_MY_INFO_FAILURE:
            draft.loadMyInfoLoading = false;
            draft.loadMyInfoError = action.error;
            break;
        case LOAD_USER_REQUEST:
            draft.loadUserLoading = true;
            draft.loadUserError = null;
            draft.loadUserDone = false;
            break;
        case LOAD_USER_SUCCESS:
            draft.loadUserLoading = false;
            draft.loadUserDone = true;
            draft.userInfo = action.data;
            break;
        case LOAD_USER_FAILURE:
            draft.loadUserLoading = false;
            draft.loadUserError = action.error;
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
        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameLoading = true;
            draft.changeNicknameDone = false;
            draft.changeNicknameError = null;
            break;
        case CHANGE_NICKNAME_SUCCESS:
            draft.changeNicknameLoading = false;
            draft.changeNicknameDone = true;
            draft.me.nickname = action.data.nickname;
            break;
        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameLoading = false;
            draft.changeNicknameError = action.error;
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

        case LEAVE_REQUEST:
            draft.leaveLoading = true;
            draft.leaveDone = false;
            draft.leaveError = null;
            break;
        case LEAVE_SUCCESS:
            draft.leaveLoading = false;
            draft.leaveDone = true;
            break;
        case LEAVE_FAILURE:
            draft.leaveLoading = false;
            draft.leaveError = action.error;
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
            draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId)
            break;
        case UNFOLLOW_FAILURE:
            draft.unfollowLoading = false;
            draft.unfollowError = action.error;
            break;
        case IGNORE_REQUEST:
            draft.ignoreLoading = true;
            draft.ignoreDone = false;
            draft.ignoreError = null;
            break;
        case IGNORE_SUCCESS:
            draft.ignoreLoading = false;
            draft.ignoreDone = true;
            draft.me.Ignorings.push({ id: action.data.UserId });
            break;
        case IGNORE_FAILURE:
            draft.ignoreLoading = false;
            draft.ignoreError = action.error;
            break;
        case UNIGNORE_REQUEST:
            draft.unIgnoreLoading = true;
            draft.unIgnoreDone = false;
            draft.unIgnoreError = null;
            break;
        case UNIGNORE_SUCCESS:
            draft.unIgnoreLoading = false;
            draft.unIgnoreDone = true;
            draft.me.Ignorings = draft.me.Ignorings.filter(v => v.id !== action.data.UserId)
            break;
        case UNIGNORE_FAILURE:
            draft.unIgnoreLoading = false;
            draft.unIgnoreError = action.error;
            break;
        case REMOVE_FOLLOWER_REQUEST:
            draft.removeFollowerLoading = true;
            draft.removeFollowerDone = false;
            draft.removeFollowerError = null;
            break;
        case REMOVE_FOLLOWER_SUCCESS:
            draft.removeFollowerLoading = false;
            draft.removeFollowerDone = true;
            draft.me.Followers = draft.me.Followers.filter((v) => v.id !== action.data.UserId);
            break;
        case REMOVE_FOLLOWER_FAILURE:
            draft.removeFollowerLoading = false;
            draft.removeFollowerError = action.error;
            break;
        default:
            break;
    }
});
export default reducer;