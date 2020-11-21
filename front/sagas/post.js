import { all, fork } from 'redux-saga/effects';

function* watchAddPost() {

}
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ]);
}
