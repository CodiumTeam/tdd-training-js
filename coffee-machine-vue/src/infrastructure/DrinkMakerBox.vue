<template>
  <div class="drink-maker-box">
    <ShowDrink v-if="isValidCommand()" :command="command"></ShowDrink>
    <NullComponent v-else></NullComponent>
  </div>
</template>

<script>
import NullComponent from './DrinkMakerBox/components/NullComponent.vue';
import ShowDrink from './DrinkMakerBox/components/ShowDrink.vue';
import { isValidCommand } from './DrinkMakerBox/validator/isValidCommand';
import { drinkMaker } from './drinkMaker';

export default {
  name: 'DrinkMakerBox',
  components: {
    NullComponent,
    ShowDrink,
  },
  props: {
    command: {
      type: String,
      default: '',
    },
  },
  methods: {
    isValidCommand: function() {
      if (!this.$props.command) return false;

      if (isValidCommand(this.$props.command)) {
        return false
      }

      drinkMaker.execute(this.$props.command)
      return true;
    }
  },
};
</script>
