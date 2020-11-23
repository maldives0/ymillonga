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
    REMOVE_FOLLOWER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
} from '../reducers/user';

function loginAPI(data) {
    return axios.post('/user/login', data);
}
function* login(action) {
    try {
        console.log('saga login', action);
        // const result = yield call(loginAPI);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
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
    return axios.post('/user/login');
}
function* logout() {
    try {

        // const result = yield call(logoutAPI);
        yield delay(1000);
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
function signupAPI() {
    return axios.post('/user/signup', data);
}
function* signup(action) {
    try {
        // const result = yield call(signupAPI);
        yield delay(1000);
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
    return axios.patch('/user/', data);
}
function* changeNickname(action) {
    try {
        // const result = yield call(changeNicknameAPI, action.data);
        yield delay(1000);
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        });
    }
};
function followAPI() {
    return axios.post(`/user/${data.userId}/follow/`, data);
}
function* follow(action) {
    try {
        // const result = yield call(followAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        });
    }
};
function unfollowAPI() {
    return axios.post('/user/unFollow', data);
}
function* unfollow(action) {
    try {
        // const result = yield call(unfollowAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        });
    }
};
function removeFollowAPI() {
    return axios.post('/user/', data);
}
function* removeFollow(action) {
    try {
        // const result = yield call(removeFollowAPI);
        yield delay(1000);
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
};

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