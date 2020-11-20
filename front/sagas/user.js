import axios from 'axios';
import { all, fork } from 'redux-saga/effects';
import userSaga from '../../../nodebird/react-nodebird/ch4/front/sagas/user';
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

function* signup() {
    try {

    } catch (err) {
        console.error(err);
    }
};
function* watchSignup() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}
export default funtion * userSaga(){
    yield all([
        fork(watchSignup),
        fork(watchLogin),
    ]);

}