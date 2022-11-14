const DrinkMaker = require("./drink_maker");

class Order {
  constructor(product, sugarLevel, money, extraHot) {
    this.product = product;
    this.sugarLevel = sugarLevel;
    this.money = money;
    this.extraHot = extraHot;
  }

  getMissingMoney() {
    if (this.product === 'Coffee' && this.money < 40) {
      return 40 - this.money;
    } else if (this.product === 'Tea' && this.money < 60) {
      return 60 - this.money;
    } else if (this.product === 'Hot chocolate' && this.money < 50) {
      return 50 - this.money;
    } else if (this.product === 'Orange juice' && this.money < 60) {
      return 60 - this.money;
    } else if (this.product === 'Coffee' || this.product === 'Tea' || this.product === 'Hot chocolate' || this.product === 'Orange juice') {
      return 0;
    } else {
      throw new Error('Product price not defined yet: ' + this.product);
    }
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
    let product = this._getProduct(order.product);
    let extraHot = '';
    if (order.extraHot) {
      extraHot = 'h'
    }
    product = product + extraHot;
    if (order.sugarLevel === 0) {
      this.drinkMaker.execute(product + '::');
    } else {
      this.drinkMaker.execute(product + ':' + order.sugarLevel + ':0');
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
    } else if (product === "Orange juice") {
      return 'O';
    } else {
      throw new Error('Product not supported: ' + product);
    }
  }
}

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

module.exports = {CoffeeMachine, MyDrinkMaker};
