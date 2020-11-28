import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

import {
    CHANGE_NICKNAME_FAILURE,
    CHANGE_NICKNAME_REQUEST,
    CHANGE_NICKNAME_SUCCESS,
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
} from '../reducers/user';

function loadUserAPI() {
    return axios.get('/user');
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}
function loadFollowersAPI(data) {
    return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data) {
    return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}
function loginAPI(data) {
    return axios.post('/user/login', data);
}
function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
};
function logoutAPI(data) {
    return axios.post('/user/logout');
}
function* logout() {
    try {
        const result = yield call(logoutAPI);
        // yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
};
function signupAPI(data) {
    return axios.post('/user', data);
    //data={email,password,nickname}, post,put,patch는 data를 넘길 수 있다
}
function* signup(action) {
    try {
        const result = yield call(signupAPI, action.data);
        console.log(result);
        // yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
};
function changeNicknameAPI(data) {
    return axios.patch('/user/nickname', { nickname: data });
}
function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data);

        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        });
    }
};
function followAPI(data) {
    return axios.patch(`/user/${data}/follow/`);
}
function* follow(action) {
    try {
        const result = yield call(followAPI, action.data);

        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
};
function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow/`);
}
function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.data);

        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
};
function removeFollowAPI(data) {
    return axios.delete(`/user/follower/${data}`, data);
}
function* removeFollow(action) {
    try {
        const result = yield call(removeFollowAPI, action.data);

        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
};

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchSignup() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}
function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchRemovefollow() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollow);
}
function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}
function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
    yield all([
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchLoadUser),
        fork(watchSignup),
        fork(watchChangeNickname),
        fork(watchFollow),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchRemovefollow),
        fork(watchLogin),
        fork(watchLogout),
    ]);

}