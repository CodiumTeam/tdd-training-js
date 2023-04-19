<template>
  <div class="machine">
    <div class="machine-top-container">
      <div class="machine-top"></div>
    </div>
    <div class="cup-wrapper">
      <CoffeeCup />
    </div>
    <div class="drink-maker">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import CoffeeCup from "../coffee/CoffeeCup.vue";

export default {
  name: 'MachineWrapper',
  components: {
    CoffeeCup,
  },
};
</script>

<style>
@import './wrapper.css';
</style>