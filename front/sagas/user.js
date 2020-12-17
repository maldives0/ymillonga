import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

import {
    CHANGE_NICKNAME_FAILURE,
    CHANGE_NICKNAME_REQUEST,
    CHANGE_NICKNAME_SUCCESS,
    CHANGE_MENUKEY_FAILURE,
    CHANGE_MENUKEY_REQUEST,
    CHANGE_MENUKEY_SUCCESS,
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
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    IGNORE_FAILURE,
    IGNORE_REQUEST,
    IGNORE_SUCCESS,
    UNIGNORE_FAILURE,
    UNIGNORE_REQUEST,
    UNIGNORE_SUCCESS,
    LOAD_MY_INFO_FAILURE,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
} from '../reducers/user';
function loadMyInfoAPI() {
    return axios.get('/user');
}

function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI);

        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}
function loadUserAPI(data) {
    return axios.get(`/user/${data}`);
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
}
function logoutAPI(data) {
    return axios.post('/user/logout');
}
function* logout() {
    try {
        yield call(logoutAPI);
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
}

function signupAPI(data) {
    return axios.post('/user', data);
}
function* signup(action) {
    try {
        const result = yield call(signupAPI, action.data);

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
function changeMenuKeyAPI(data) {
    return axios.patch('/user/menuKey', { currentKey: data });
}
function* changeMenuKey(action) {
    try {
        const result = yield call(changeMenuKeyAPI, action.data);

        yield put({
            type: CHANGE_MENUKEY_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_MENUKEY_FAILURE,
            error: err.response.data,
        });
    }
};
function ignoreAPI(data) {
    return axios.patch(`/user/${data}/ignore`);
}
function* ignore(action) {
    try {
        const result = yield call(ignoreAPI, action.data);

        yield put({
            type: IGNORE_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: IGNORE_FAILURE,
            error: err.response.data,
        });
    }
}
function unIgnoreAPI(data) {
    return axios.delete(`/user/${data}/ignore`);
}
function* unIgnore(action) {
    try {
        const result = yield call(unIgnoreAPI, action.data);

        yield put({
            type: UNIGNORE_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNIGNORE_FAILURE,
            error: err.response.data,
        });
    }
}
function followAPI(data) {
    return axios.patch(`/user/${data}/follow`);
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
}
function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow`);
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
}
function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);
}
function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);

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
}
function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchSignup() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}
function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchChangeMenuKey() {
    yield takeLatest(CHANGE_MENUKEY_REQUEST, changeMenuKey);
}
function* watchIgnore() {
    yield takeLatest(IGNORE_REQUEST, ignore);
}

function* watchUnIgnore() {
    yield takeLatest(UNIGNORE_REQUEST, unIgnore);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchRemovefollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}
function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}
function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
    yield all([
        fork(watchLoadMyInfo),
        fork(watchLoadUser),
        fork(watchSignup),
        fork(watchChangeNickname),
        fork(watchChangeMenuKey),
        fork(watchIgnore),
        fork(watchUnIgnore),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchRemovefollower),
        fork(watchLogin),
        fork(watchLogout),
    ]);

}