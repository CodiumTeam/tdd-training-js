<template>
  <div class="container">
    <div class="arrow">
      <div class="outer"></div>
      <div class="inner"></div>
    </div>
    <div class="message-body">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
/* Add your CSS styles here */
</style>