<template>
  <input type="checkbox" :checked="modelValue" @input="onInput" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const onInput = () => {
      emit("update:model-value", !props.modelValue);
    };

    return {
      onInput,
    };
  },
};
</script>

<style>
</style>
