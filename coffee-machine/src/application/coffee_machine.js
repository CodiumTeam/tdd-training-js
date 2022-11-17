const Order = require("../domain/Order");

class CoffeeMachine {
  sugarLevel = 0;

  constructor(myDrinkMaker) {
    this.myDrinkMaker = myDrinkMaker;
  }

  selectZeroSugar() {
    this.sugarLevel = 0;
  }

  selectOneSugar() {
    this.sugarLevel = 1;
  }

  selectTwoSugar() {
    this.sugarLevel = 2;
  }

  prepareCoffee() {
    this._prepareDrink('Coffee');
  }

  prepareTea() {
    this._prepareDrink('Tea');
  }

  prepareHotChocolate() {
    this._prepareDrink('Hot chocolate');
  }

  _prepareDrink(product) {
    const order = new Order(product, this.sugarLevel);
    this.myDrinkMaker.processOrder(order);
    this._resetMachineToDefaultValues();
  }

  _resetMachineToDefaultValues() {
    this.sugarLevel = 0;
  }

}

module.exports = CoffeeMachine;
