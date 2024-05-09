let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function () {
  let drinkMaker;
  let coffeeMachine;

  beforeEach(() => {
    drinkMaker = new DrinkMaker();
    drinkMaker.execute = jest.fn()
    coffeeMachine = new CoffeeMachine(drinkMaker);
  });

  it('prepare coffee without sugar', function () {
    addEnoughMoney();
    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C::");
  });

  it('prepare tea without sugar', function () {
    addEnoughMoney();
    coffeeMachine.prepareTea();

    expect(drinkMaker.execute).toBeCalledWith("T::");
  });

  it('prepare chocolate without sugar', function () {
    addEnoughMoney();
    coffeeMachine.prepareChocolate();

    expect(drinkMaker.execute).toBeCalledWith("H::");
  });

  it('prepare coffee with one sugar', function () {
    addEnoughMoney();
    coffeeMachine.selectOneSugar();
    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C:1:0");
  });

  it('prepare tea with one sugar', function () {
    addEnoughMoney();
    coffeeMachine.selectOneSugar();
    coffeeMachine.prepareTea();

    expect(drinkMaker.execute).toBeCalledWith("T:1:0");
  });

  it('prepare chocolate with one sugar', function () {
    addEnoughMoney();
    coffeeMachine.selectOneSugar();
    coffeeMachine.prepareChocolate();

    expect(drinkMaker.execute).toBeCalledWith("H:1:0");
  });

  it('prepare drinks with two sugars', function () {
    addEnoughMoney();
    coffeeMachine.selectTwoSugar();
    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C:2:0");
  });

  it('0 suggar is always the default value', function () {
    addEnoughMoney();
    coffeeMachine.selectTwoSugar();
    coffeeMachine.prepareCoffee();

    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C::");
  });

  it('you need to pay for the coffee', function () {
    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toHaveBeenCalledWith("M: You need to add 60 cents");
    expect(drinkMaker.execute).toHaveBeenCalledTimes(1);
  });

  function addEnoughMoney() {
    coffeeMachine.insertMoney(100)
  }
});
