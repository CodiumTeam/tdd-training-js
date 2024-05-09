class CoffeeMachine {
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
        if (this._amount < 60 && this._drinkType === 'C') {
            this._drinkMaker.execute("M: You need to add 60 cents");
            return;
        }
        if (this._amount < 60 && this._drinkType === 'T') {
            this._drinkMaker.execute("M: You need to add 40 cents");
            return;
        }
        if (this._amount < 50 && this._drinkType === 'H') {
            this._drinkMaker.execute("M: You need to add 50 cents");
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
