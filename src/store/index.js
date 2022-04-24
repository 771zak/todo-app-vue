import { createStore } from "vuex";
import { getAuth, signOut } from "firebase/auth";
import app from "../firebase/db.js";
const auth = getAuth(app);

import router from "@/router";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    logOut() {
      signOut(auth).then(() => {
        router.replace({ name: "login" });
      });
    },
    checkUser() {
      console.log("hello");
    },
  },
  modules: {},
});
