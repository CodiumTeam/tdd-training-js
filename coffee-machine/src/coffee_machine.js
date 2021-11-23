class CoffeeMachine {
  constructor(drinkMaker) {
    this.drinkMaker = drinkMaker;
  }

  tea() {
    this.drinkMaker.execute('T::');
  }
}

module.exports = CoffeeMachine;
