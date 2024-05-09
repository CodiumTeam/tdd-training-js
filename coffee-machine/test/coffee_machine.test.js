let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function () {
  it('prepare coffee without sugar', function () {
    const drinkMaker = new DrinkMaker();
    drinkMaker.execute = jest.fn()
    let coffeeMachine = new CoffeeMachine(drinkMaker);

    coffeeMachine.prepareCoffee();

    expect(drinkMaker.execute).toBeCalledWith("C::");
  });
});
