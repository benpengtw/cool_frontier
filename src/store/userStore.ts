import { defineStore } from "pinia";
import router from "@/router";

interface IUser {
  account: string | unknown;
  id: number | unknown;
  name?: string;
  status: number;
  token: string | unknown;
  money: number;
}

export const UserStore = defineStore({
  id: "user",
  state: () =>
    ({
      account: undefined,
      id: 0,
      name: undefined,
      status: 0,
      token: undefined,
      money: 0,
    } as IUser),
  actions: {
    setUserInfo(data: any) {
      window.localStorage.setItem("USER_INFO", JSON.stringify(data));
      window.localStorage.setItem("USER_NAME", data.name);
      this.account = data.account;
      this.id = data.id;
      this.name = data.name;
      this.token = data.token;
    },
    checkUserInfo() {
      if (window.localStorage.getItem("USER_INFO")) {
        const GET_USER_INFO = JSON.parse(window.localStorage.USER_INFO);
        this.setUserInfo(GET_USER_INFO);
      }
    },

    setUerMoney(money: number) {
      this.money = money;
    },
    clearUserInfo() {
      window.localStorage.removeItem("USER_INFO");
      window.localStorage.removeItem("TOKEN");
      window.localStorage.clear();
      this.account = undefined;
      this.id = 0;
      this.status = 0;
      this.token = undefined;

      router.push({ path: "/" });
    },
  },
  getters: {
    getUserName(): string {
      const username = window.localStorage.getItem("USER_NAME");
      return username || "";
    },
  },
});
