<template>
  <div>
    <input
      type="number"
      class="input"
      min="0"
      max="100"
      :value="insertedCoins"
      @change="handleOnChange"
      placeholder="Insert Coin"
    />
  </div>
</template>

<script>
export default {
  name: 'InsertCoin',
  data() {
    return {
      insertedCoins: '',
    };
  },
  methods: {
    handleOnChange(event) {
      const insertedCoin = event.target.value;
      this.insertedCoins = insertedCoin;
      this.$emit('onInsertedCoin', insertedCoin);
    },
  },
};
</script>

<style>
@import './insert-coin.css';
</style>