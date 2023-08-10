<template>
  <Button :small="true">
    <slot></slot>
  </Button>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'SmallButton',
  components: {
    Button,
  },
};
</script>