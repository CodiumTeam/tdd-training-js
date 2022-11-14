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

  showMessage(message) {
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

  showMessage(message) {
    this.drinkMaker.execute('M:' + message);
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
  money = 0;

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

  addMoney(money) {
    this.money = money;
  }

  _prepareDrink(product) {
    const order = new Order(product, this.sugarLevel);
    if (order.product === 'Coffee' && this.money < 40) {
      this.myDrinkMaker.showMessage("Missing 40cents");
    } else if (order.product === 'Tea' && this.money < 60) {
      this.myDrinkMaker.showMessage("Missing 60cents");
    } else if (order.product === 'Hot chocolate' && this.money < 50) {
      this.myDrinkMaker.showMessage("Missing 50cents");
    } else {
      this.myDrinkMaker.processOrder(order);
      this._resetMachineToDefaultValues();
    }
  }

  _resetMachineToDefaultValues() {
    this.sugarLevel = 0;
  }


}

module.exports = {CoffeeMachine, MyDrinkMaker};
