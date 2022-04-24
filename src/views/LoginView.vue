<template>
  <div class="login">
    <div class="left"></div>
    <div class="right">
      <div class="header">
        <h2>Welcome to</h2>
        <h1>Todos</h1>
      </div>
      <div class="formContainer">
        <CustomInput type="email" @custonInput="logEmail" />
        <CustomInput type="password" @custonInput="logPassword" />
        <h3 v-if="email">hello</h3>
        <button class="logInBtn" @click="signIn">Log In</button>
        <p>
          Don't have an account?
          <router-link to="/register">Create new account</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/CustomInput.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import app from "../firebase/db.js";

export default {
  name: "LoginView",
  components: {
    CustomInput,
  },
  date() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    logEmail(event) {
      this.email = event;
    },
    logPassword(event) {
      this.password = event;
    },
    async signIn() {
      const auth = getAuth(app);
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCred) => {
          console.log(userCred.user.uid);
          this.$router.replace({ path: "/" });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  mounted() {
    this.$store.dispatch("checkUser");
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left,
  .right {
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .left img {
    width: 90%;
    height: auto;
  }
  .right {
    .header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      h1 {
        margin-left: 10px;
      }
    }
    .logInBtn {
      width: 100%;
      padding: 5px;
      font-size: 14pt;
      color: white;
      background-color: #ffb400;
      border: none;
      border-radius: 5px;
      box-shadow: 3px 3px 10px #999;
      margin-bottom: 15px;
    }
  }
  #logo {
    width: 200px;
    height: auto;
  }
}
</style>
