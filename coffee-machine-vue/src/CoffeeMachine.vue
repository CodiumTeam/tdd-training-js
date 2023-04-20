<template>
  <MachineWrapper>
    <DrinksBlock>
      <ColumnsButtonsGroup>
        <Button text="Coffee" :onClick="handleClick" />
<!--        Please read the README to see the available React components.-->
      </ColumnsButtonsGroup>
    </DrinksBlock>

    <RightPanel>
      <p>This is the right panel</p>
    </RightPanel>

    <div class="output">
      <DrinkMakerBox :command="command" />
    </div>
  </MachineWrapper>
</template>

<script>
import DrinksBlock from './ui/machine/DrinksBlock.vue';
import ColumnsButtonsGroup from './ui/buttons/ColumnsButtonsGroup.vue';
import RightPanel from './ui/machine/RightPanel.vue';
import CoffeeCup from "./ui/coffee/CoffeeCup.vue";
import MachineWrapper from "./ui/machine/Wrapper.vue";
import Button from "./ui/buttons/Button.vue";
import DrinkMakerBox from "./infrastructure/DrinkMakerBox.vue";

export default {
  components: {
    MachineWrapper,
    CoffeeCup,
    DrinksBlock,
    ColumnsButtonsGroup,
    RightPanel,
    Button,
    DrinkMakerBox
  },
  data() {
    return {
      command: ''
    };
  },
  methods: {
    handleClick() {
      this.command = 'c'
    },
  }
}
</script>

<style>
/* Add CSS styles here */
</style>