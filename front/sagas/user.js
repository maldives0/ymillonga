import axios from 'axios';
import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';

import {
    FOLLOW_FAILURE,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
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
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
};
function signupAPI() {
    // return axios.post('/user/signup',data);
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
function* watchSignup() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}
function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}
export default function* userSaga() {
    yield all([
        fork(watchSignup),
        fork(watchLogin),
    ]);

}