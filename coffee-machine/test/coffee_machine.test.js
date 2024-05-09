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
    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C::");
  });

  it('prepare tea without sugar', function () {
    coffeeMachine.prepareTea();

    expect(drinkMaker.execute).toBeCalledWith("T::");
  });

  it('prepare chocolate without sugar', function () {
    coffeeMachine.prepareChocolate();

    expect(drinkMaker.execute).toBeCalledWith("H::");
  });
});
