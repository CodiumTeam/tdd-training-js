<template>
  <button @click="onClick" :class="['button', { 'small': small }]">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
@import './button.css';
</style>