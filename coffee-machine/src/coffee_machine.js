class CoffeeMachine {
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
    }


    prepareCoffee() {
        this._drinkMaker.execute("C::");
    }

    prepareTea() {
        this._drinkMaker.execute("T::");
    }
}

module.exports = CoffeeMachine;
