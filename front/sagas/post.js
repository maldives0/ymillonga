import { all, fork, takeLatest, put, throttle, call } from "redux-saga/effects";
// import shortId from 'shortid';
import axios from 'axios';
import {
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    RETWEET_REQUEST,
    RETWEET_SUCCESS,
    RETWEET_FAILURE,

    // generateDummyPost,

} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "../reducers/user";

function retweetAPI(data) {
    return axios.post(`/post/${data}/retweet`);
}
function* retweet(action) {
    try {

        const result = yield call(retweetAPI, action.data)

        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}
function uploadImagesAPI(data) {
    return axios.post('/post/images', data);
}
function* uploadImages(action) {
    try {

        const result = yield call(uploadImagesAPI, action.data)

        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}
function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);//get은 두번째 인자 자리에 data를 넣을 수 없으므로('/',{withCredentials:true}) 주소에 ?뒤에 키는 값 형식으로 넣어준다, 주소에 데이터가 들어가면서 데이터캐싱이 가능하다(put,patch는 안됨)
}
function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId);

        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });

    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}
function addPostAPI(data) {
    return axios.post('/post', data);
    //{ content: data }: content를 json형식으로 보냄
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data)

        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function removePostAPI(data) {
    return axios.delete(`/post/${data}`);
}
function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data)

        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);

        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}
function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}
function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchLikePosts() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePosts() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchLoadPosts() {
    yield throttle(5000, LOAD_POSTS_REQUEST, loadPosts);
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchLikePosts),
        fork(watchUnlikePosts),
        fork(watchLoadPosts),
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}