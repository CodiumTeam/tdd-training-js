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

module.exports = Order;
