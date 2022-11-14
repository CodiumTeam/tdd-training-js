class CoffeeMachine {
  sugarLevel = 0;

  constructor(drinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  selectOneSugar() {
    this.sugarLevel = 1;
  }

  selectTwoSugar() {
    this.sugarLevel = 2;
  }

  selectCoffee() {
    this._prepareDrink('C');
  }

  selectTea() {
    this._prepareDrink('T');
  }

  selectHotChocolate() {
    this._prepareDrink('H');
  }

  _prepareDrink(product) {
    if (this.sugarLevel === 0) {
      this.drinkMaker.execute(product + '::');
    } else {
      this.drinkMaker.execute(product + ':' + this.sugarLevel + ':0');
    }
  }

}

module.exports = CoffeeMachine;
