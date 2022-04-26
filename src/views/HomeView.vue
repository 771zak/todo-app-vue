<template>
  <div class="home">
    <input
      type="text"
      v-model="task"
      @keyup.enter="addTask"
      class="border-amber-500 border-b-2 w-1/4 py-1"
    />
    <button
      @click="addTask"
      class="bg-amber-500 hover:bg-amber-600 text-white ml-1 p-1"
    >
      Add Task
    </button>
    <button @click="logOut">Log Out</button>
    <div>
      <div v-for="task in tasks" :key="task.date" class="flex flex-row m-3">
        <h1 class="bg-blue-500 w-1/4">{{ task.task }}</h1>
        <button
          @click="delteTask(task)"
          class="bg-red-500 p-1 hover:bg-red-600"
        >
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from "../firebase/db.js";
const db = getFirestore(app);

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      task: "",
      tasks: [],
    };
  },
  methods: {
    async addTask() {
      const doc = {
        task: this.task,
        time: new Date(),
        status: false,
      };

      this.task = "";
      this.tasks.push(doc);
      const docRef = await addDoc(collection(db, "todos"), doc);
      console.log(docRef);
    },
    logOut() {
      this.$store.dispatch("logOut");
    },
    delteTask(task) {
      const i = this.tasks.indexOf(task);
      this.tasks.splice(i, 1);
    },
  },
  async mounted() {
    const querySnap = await getDocs(collection(db, "todos"));
    querySnap.forEach((doc) => {
      this.tasks.push(doc.data());
    });
    console.log(this.tasks);
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100vh;
}
</style>
