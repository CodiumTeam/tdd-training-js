<template>
  <button @click="$emit('onClick')" :class="['button', { 'small': small }]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
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