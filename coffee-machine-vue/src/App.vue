<template>
  <div class="root">
      <img
        src="https://www.codium.team/img/codium-black-200x46.png"
        alt="Codium Team"
        title="Codium team"
      />
      <h1>Coffee Machine Kata</h1>
    <CoffeeMachine/>
    </div>
</template>

<script>
import CoffeeMachine from "./CoffeeMachine.vue";

export default {
  components: {CoffeeMachine},
}
</script>
