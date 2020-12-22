<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  setup(props, { emit }) {
    const onClick = emit("click");
    return {
      onClick,
    };
  },
};
</script>
