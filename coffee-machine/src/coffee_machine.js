class CoffeeMachine {
    _prices = {
        'C' : 60,
        'H' : 50,
        'T' : 40,

    };
    constructor(drinkMaker) {
        this._drinkMaker = drinkMaker;
        this._sugar = 0;
        this._amount = 0;
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

    selectTwoSugar() {
        this._sugar = 2;
    }

    insertMoney(amount) {
        this._amount = amount;
    }

    _prepareDrink() {
        const amountDifference =  this._prices[this._drinkType] - this._amount;
        if (amountDifference > 0)   {
            this._drinkMaker.execute("M: You need to add " + amountDifference + " cents");
            return;
        }
        if (this._sugar === 0) {
            this._drinkMaker.execute(this._drinkType + "::");
        } else {
            this._drinkMaker.execute(this._drinkType + ":" + this._sugar + ":0");
        }
        this._sugar = 0;
    }
}

module.exports = CoffeeMachine;
