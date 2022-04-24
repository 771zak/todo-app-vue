<template>
  <div class="inputContainer">
    <label>{{ type }}</label>
    <input :type="type" @input="$emit('custonInput', $event.target.value)" />
  </div>
</template>
<script>
export default {
  name: "CustomInput",
  props: ["type"],
  methods: {},
};
</script>
