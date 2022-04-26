<template>
  <div class="inputContainer">
    <label class="text-amber-500 text-xl">{{ type }}</label>
    <input
      :type="type"
      @input="$emit('custonInput', $event.target.value)"
      :placeholder="type"
      class="border-amber-500 border-b-2"
    />
  </div>
</template>
<script>
export default {
  name: "CustomInput",
  props: ["type"],
  methods: {},
};
</script>

<style>
.inputContainer {
  position: relative;
}
input {
  transition: 0.3s ease;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
}
input:focus {
  outline: none;
  border-color: rgb(217 119 6);
}
input::placeholder {
  transition: 0.3s ease;
}
input:focus::placeholder {
  color: rgb(217 119 6);
}
</style>
