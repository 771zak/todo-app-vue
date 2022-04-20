import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {firebasePlugin} from "vuefire";


createApp(App).use(store).use(router).use(firebasePlugin).mount("#app");
