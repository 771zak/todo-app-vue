<template>
  <div class="home">
		<input type="text" 
			v-model="task"
		/>
		<button @click="addTask">eowij</button>
		<button @click="logOut">Log Out</button>
  </div>
</template>

<script>
import {getFirestore, collection, addDoc} from "firebase/firestore";
import app from "../firebase/db.js"
const db = getFirestore(app);

export default {
  name: "HomeView",
  components: {
  },
	data() {
		return {
			task: ""
		}
	},
	methods: {
		async addTask() {
				const docRef = await addDoc(collection(db, "todos"), {
					task: this.task,
					time: new Date(),
				})
		},
		logOut() {
			this.$store.dispatch("logOut");
		}
	}
};
</script>

<style lang="scss">
.home {
	width: 100%;
	height: 100vh;
}
</style>
