import axios from "axios";
const Axios = axios.create({
  baseURL: "https://randomuser.me/",
  timeout: 10000,
});

/**
 * @description: 代理會員列表
 * @method: get
 */
export function getMemberList(params) {
  return Axios.get("api/", { params });
}
