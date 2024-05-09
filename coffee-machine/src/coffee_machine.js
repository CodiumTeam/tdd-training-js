class CoffeeMachine {
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
        this._sugar = 0;
    }


    _drinkType = "";

    prepareCoffee() {
        this._drinkType = "C";
        if (this._sugar === 0) {
            this._drinkMaker.execute(this._drinkType + "::");
        } else {
            this._drinkMaker.execute(this._drinkType + ":1:0");
        }
    }

    prepareTea() {
        this._drinkType = "T"
        if (this._sugar === 0) {
            this._drinkMaker.execute(this._drinkType + "::");
        } else {
            this._drinkMaker.execute(this._drinkType + ":1:0");
        }
    }

    prepareChocolate() {
        this._drinkType = "H"
        if (this._sugar === 0) {
            this._drinkMaker.execute(this._drinkType + "::");
        } else {
            this._drinkMaker.execute(this._drinkType + ":1:0");
        }
    }

    selectOneSugar() {
        this._sugar = 1;
    }
}

module.exports = CoffeeMachine;
