class CoffeeMachine {
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
    }


    prepareCoffee() {
        this._drinkMaker.execute("C::");
    }
}

module.exports = CoffeeMachine;
