const IMyDrinkMaker = require("../domain/IMyDrinkMaker");

class MyDrinkMaker extends IMyDrinkMaker {


  constructor(drinkMaker) {
    super();
    this.drinkMaker = drinkMaker;
    this.productList = [];
    this.productList['Coffee'] = 'C';
    this.productList['Tea'] = 'T';
    this.productList['Hot chocolate'] = 'H';
  }

  processOrder(order) {
    let product = this.productList[order.product];
    if (order.sugarLevel === 0) {
      this.drinkMaker.execute(product + '::');
    } else {
      this.drinkMaker.execute(product + ':' + order.sugarLevel + ':0');
    }
  }

}

module.exports = MyDrinkMaker;
