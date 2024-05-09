class CoffeeMachine {
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
        this._sugar = 0;
    }


    prepareCoffee() {
        if (this._sugar === 0) {
            this._drinkMaker.execute("C::");
        } else {
            this._drinkMaker.execute("C:1:0");
        }
    }

    prepareTea() {
        if (this._sugar === 0) {
            this._drinkMaker.execute("T::");
        } else {
            this._drinkMaker.execute("T:1:0");
        }
    }

    prepareChocolate() {
        this._drinkMaker.execute("H::");
    }

    selectOneSugar() {
        this._sugar = 1;
    }
}

module.exports = CoffeeMachine;
