import { all, fork, call, put, throttle, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
function logInAPI(data) {
    return axios.post('/api/login', data);
}

//test하기
// const l = login({ type: 'LOG_IN_REQUEST', data: { id: 'momo' } });
// l.next();

function* login(action) {
    try {
        yield put({
            type: 'LOG_IN_REQUEST',
        });
        // const result = yield call(logInAPI, action.data)
        delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data,
        });
    }
}


function logOutAPI() {
    return axios.post('/api/logOut');
}
function* logOut() {

    delay(1000);
    // const result = yield call(logOutAPI)
    yield put({
        type: 'LOG_OUT_SUCCESS',
        data: result.data
    });
} catch (err) {
    yield put({
        type: 'LOG_OUT_FAILURE',
        data: err.response.data,
    });
}
}


function addPostAPI(data) {
    return axios.post('/api/post', data);
}
function* addPost(action) {

    // const result = yield call(addPostAPI, action.data)
    delay(1000);
    yield put({
        type: 'ADD_POST_SUCCESS',
        data: result.data
    });
} catch (err) {
    yield put({
        type: 'ADD_POST_FAILURE',
        data: err.response.data,
    });
}
}
function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', login);
}
function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}
function* watchAddPost() {
    yield throttle('ADD_POST_REQUEST', addPost, 10000);
}
export default function* rootSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchAddPost),

    ]);
}