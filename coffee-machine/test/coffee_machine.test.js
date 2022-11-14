let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function () {
  it('User is able to select "Coffee" without sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('User is able to select "Tea" without sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTea();

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Hot chocolate" without sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectHotChocolate();

    expect(maker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able select a product with one sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectOneSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:1:0');
  });

  it('User is able select a product with two sugar', () => {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
  });
});
