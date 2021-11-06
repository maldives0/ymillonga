import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
  return axios.get("/user").then((response) => response.data);
}

export function loadUserAPI(data: number) {
  return axios.get(`/user/${data}`).then((response) => response.data);
}

export function loginAPI(data: { email: string; password: string }) {
  return axios.post("/user/login", data).then((response) => response.data);
}

export function logoutAPI() {
  return axios.post("/user/logout").then((response) => response.data);
}

export function signupAPI(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return axios.post("/user", data).then((response) => response.data);
}

export function changeNicknameAPI(data: string) {
  return axios
    .patch("/user/nickname", { nickname: data })
    .then((response) => response.data);
}

export function ignoreAPI(data: number) {
  return axios.patch(`/user/${data}/ignore`).then((response) => response.data);
}

export function unIgnoreAPI(data: number) {
  return axios
    .delete(` /user/${data}/ignore`)
    .then((response) => response.data);
}

export function followAPI(data: number) {
  return axios.patch(`/user/${data}/follow`).then((response) => response.data);
}

export function unfollowAPI(data: number) {
  return axios.delete(`/user/${data}/follow`).then((response) => response.data);
}

export function removeFollowerAPI(data: number) {
  return axios
    .delete(`/user/follower/${data}`)
    .then((response) => response.data);
}

export function leaveAPI() {
  return axios.delete(`/user/leave`).then((response) => response.data);
}
