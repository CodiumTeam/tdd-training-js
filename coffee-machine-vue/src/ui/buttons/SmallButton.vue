<template>
  <Button :small="true" :text="text" :onClick="onClick" />
</template>

<script>
import Button from './Button';

export default {
  name: 'SmallButton',
  components: {
    Button,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
};
</script>