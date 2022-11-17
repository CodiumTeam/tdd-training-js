const Order = require('./order');

class CoffeeMachine {
  sugarLevel = 0;
  money = 0;
  extraHot = false;

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

  selectExtraHot() {
    this.extraHot = true;
  }

  selectCoffee() {
    this._prepareDrink('Coffee');
  }

  selectTea() {
    this._prepareDrink('Tea');
  }

  selectHotChocolate() {
    this._prepareDrink('Hot chocolate');
  }

  selectOrange() {
    this._prepareDrink('Orange juice');
  }

  addMoney(money) {
    this.money = money;
  }

  _prepareDrink(product) {
    const order = new Order(product, this.sugarLevel, this.money, this.extraHot);

    if (order.product === 'Orange juice' && order.extraHot) {
      this.myDrinkMaker.showMessage("Cannot prepare extra hot Orange juice");
    }

    const missingMoney = order.getMissingMoney();
    if (missingMoney === 0) {
      this.myDrinkMaker.processOrder(order);
      this._resetMachineToDefaultValues();
    } else {
      this.myDrinkMaker.showMessage("Missing " + missingMoney + "cents");
    }
  }

  _resetMachineToDefaultValues() {
    this.sugarLevel = 0;
    this.money = 0;
    this.extraHot = false;
  }

}

module.exports = {CoffeeMachine};
