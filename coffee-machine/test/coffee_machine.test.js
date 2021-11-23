let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function () {
  it('User is able to select "Tea" without sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.tea();

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });
});
