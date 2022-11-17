const IMyDrinkMaker = require('./imy_drink_maker');

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

module.exports = MyDrinkMaker;
