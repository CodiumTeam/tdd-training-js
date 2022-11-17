const IMyDrinkMaker = require("../domain/IMyDrinkMaker");

class MyDrinkMaker extends IMyDrinkMaker {
  constructor(drinkMaker) {
    super();
    this.drinkMaker = drinkMaker;
  }

  processOrder(order) {
    let product = 'C';
    if (order.sugarLevel === 0) {
      this.drinkMaker.execute(product + '::');
      // } else {
      //   this.drinkMaker.execute(product + ':' + this.sugarLevel + ':0');
    }
  }

}

module.exports = MyDrinkMaker;
