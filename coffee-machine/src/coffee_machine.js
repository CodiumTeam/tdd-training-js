const DrinkMaker = require("./drink_maker");

class Order {
  constructor(product, sugarLevel) {
    this.product = product;
    this.sugarLevel = sugarLevel;
  }
}

class IMyDrinkMaker {
  processOrder(order) {
    throw new Error('Method not implemented')
  }
}

class MyDrinkMaker extends IMyDrinkMaker {
  constructor(drinkMaker) {
    super();
    this.drinkMaker = drinkMaker;
  }

  processOrder(order) {
    if (order.sugarLevel === 0) {
      this.drinkMaker.execute(this._getProduct(order.product) + '::');
    } else {
      this.drinkMaker.execute(this._getProduct(order.product) + ':' + order.sugarLevel + ':0');
    }
  }

  _getProduct(product) {
    if (product === "Coffee") {
      return 'C';
    } else if (product === "Tea") {
      return 'T';
    } else if (product === "Hot chocolate") {
      return 'H';
    } else {
      throw new Error('Product not supported: ' + product);
    }
  }
}

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

  selectCoffee() {
    this._prepareDrink('Coffee');
  }

  selectTea() {
    this._prepareDrink('Tea');
  }

  selectHotChocolate() {
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

module.exports = { CoffeeMachine, MyDrinkMaker};
