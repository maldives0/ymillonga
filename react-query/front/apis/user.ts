import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
  return axios.get("/user").then((response) => response.data);
}

export function loadUserAPI(data: { id: number }) {
  return axios.get(`/user/${data}`);
}

export function loginAPI(data: { email: string; password: string }) {
  return axios.post("/user/login", data);
}

export function logoutAPI() {
  return axios.post("/user/logout");
}

export function signupAPI(data: {
  email: string;
  nickname: string;
  password: string;
}) {
  return axios.post("/user", data);
}

export function changeNicknameAPI(data: string) {
  return axios.patch("/user/nickname", { nickname: data });
}

export function ignoreAPI(data: { id: number }) {
  return axios.patch(`/user/${data}/ignore`);
}

export function unIgnoreAPI(data: { id: number }) {
  return axios.delete(` /user/${data}/ignore`);
}

export function followAPI(data: { id: number }) {
  return axios.patch(`/user/${data}/follow`);
}

export function unfollowAPI(data: { id: number }) {
  return axios.delete(`/user/${data}/follow`);
}

export function removeFollowerAPI(data: { id: number }) {
  return axios.delete(`/user/follower/${data}`);
}

export function leaveAPI() {
  return axios.delete(`/user/leave`);
}
