import axios from "axios";
import { backUrl } from "../config/config";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export function loadMyInfoAPI() {
  return axios.get("/user").then((response) => response.data);
}
