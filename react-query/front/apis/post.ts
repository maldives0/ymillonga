import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

function loadPostAPI(data: number) {
  return axios.get(`/post/${data}`).then((response) => response.data);
}

function loadUserPostsAPI(data:string, lastId?:number) {
  return axios
    .get(`/user/${data}/posts?lastId=${lastId || 0}`)
    .then((response) => response.data);
}
function loadHashtagPostsAPI(data:string, lastId?:number) {
  return axios
    .get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`)
    .then((response) => response.data); // 주소에 한글이 들어가면 unescaped character error가 난다
}

function loadRelatedPostsAPI(lastId?:number) {
  return axios
    .get(`/posts/related?lastId=${lastId || 0}`)
    .then((response) => response.data); //get은 주소를 cashing하면 데이터까지 cashing 할 수 있다//lastId가 undefined면 0으로 보내기
}

function loadPostsAPI(lastId?:number) {
  return axios
    .get(`/posts?lastId=${lastId || 0}`)
    .then((response) => response.data); //get은 주소를 cashing하면 데이터까지 cashing 할 수 있다//lastId가 undefined면 0으로 보내기
}

function addPostAPI(data:FormData) {
  return axios.post("/post", data).then((response) => response.data);
}

function addCommentAPI(data:{postId:number; content:string; userId:number}) {
  return axios
    .post(`/post/${data.postId}/comment`, data)
    .then((response) => response.data);
}

function updatePostAPI(data: { postId: number; content:string}) {
  return axios
    .patch(`/post/${data.postId}`, data)
    .then((response) => response.data);
}

function retweetAPI(data:number) {
  return axios.post(`/post/${data}/retweet`).then((response) => response.data);
}

function uploadImagesAPI<T>(data:FormData) {
  return axios.post<T>("/post/images", data).then((response) => response.data);
}

function likePostAPI(data:number) {
  return axios.patch(`/post/${data}/like`).then((response) => response.data);
}

function unlikePostAPI(data:number) {
  return axios.delete(`/post/${data}/like`).then((response) => response.data);
}

function reportPostAPI(data: { postId: number }) {
  return axios
    .post(`/post/${data.postId}/report`, data)
    .then((response) => response.data); // POST /post/1/comment
}

function removePostAPI(data: number) {
  return axios.delete(`/post/${data}`).then((response) => response.data);
}
