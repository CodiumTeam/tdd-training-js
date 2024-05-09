class CoffeeMachine {
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
        this._sugar = 0;
    }


    _drinkType = "";

    prepareCoffee() {
        this._drinkType = "C";
        this._prepareDrink();
    }



    prepareTea() {
        this._drinkType = "T"
        this._prepareDrink();
    }

    prepareChocolate() {
        this._drinkType = "H"
        this._prepareDrink();
    }

    selectOneSugar() {
        this._sugar = 1;
    }

    _prepareDrink() {
        if (this._sugar === 0) {
            this._drinkMaker.execute(this._drinkType + "::");
        } else {
            this._drinkMaker.execute(this._drinkType + ":1:0");
        }
    }
}

module.exports = CoffeeMachine;
