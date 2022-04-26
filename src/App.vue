<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("checkUser");
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
