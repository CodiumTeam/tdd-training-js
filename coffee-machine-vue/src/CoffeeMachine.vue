<template>
  <MachineWrapper>
    <DrinksBlock>
      <ColumnsButtonsGroup>
<!--        Please read the README to see the available React components.-->
      </ColumnsButtonsGroup>
    </DrinksBlock>

    <RightPanel>
      <p>This is the right panel</p>
    </RightPanel>

    <div class="output">
    </div>
  </MachineWrapper>
</template>

<script>
import DrinksBlock from './ui/machine/DrinksBlock.vue';
import ColumnsButtonsGroup from './ui/buttons/ColumnsButtonsGroup.vue';
import RightPanel from './ui/machine/RightPanel.vue';
import CoffeeCup from "./ui/coffee/CoffeeCup.vue";
import MachineWrapper from "./ui/machine/Wrapper.vue";

export default {
  components: {
    MachineWrapper,
    CoffeeCup,
    DrinksBlock,
    ColumnsButtonsGroup,
    RightPanel,
  },
  data() {
    return {
      command: ''
    };
  },
  methods: {
    onInsertedCoin(insertedCoin) {
      // Handle inserted coin
    }
  }
}
</script>

<style>
/* Add CSS styles here */
</style>