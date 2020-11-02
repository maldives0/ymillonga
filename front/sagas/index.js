import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import postSaga from './post';

//test하기
// const l = login({ type: 'LOG_IN_REQUEST', data: { id: 'momo' } });
// l.next();



export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(postSaga),

    ]);
}