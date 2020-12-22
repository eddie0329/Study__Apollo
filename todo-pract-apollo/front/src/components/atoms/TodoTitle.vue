<template>
  <span>{{ todoTitle }}</span>
</template>

<script>
export default {
  props: {
    todoTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>