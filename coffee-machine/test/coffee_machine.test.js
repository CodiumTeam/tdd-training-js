let CoffeeMachine = require('../src/coffee_machine');
let DrinkMaker = require('../src/drink_maker');

describe('CoffeeMachine', function () {

  let maker;
  beforeEach(() => {
    maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
  })

  it('User is able to select "Coffee" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('User is able to select "Tea" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTea();

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Hot chocolate" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectHotChocolate();

    expect(maker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able select a product with one sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectOneSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:1:0');
  });

  it('User is able select a product with two sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
  });

  it('User is able select a product with 0 sugar', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectZeroSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('After ordering a product sugar level is reset to 0 (default value)', () => {
    const coffeeMachine = new CoffeeMachine(maker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
    expect(maker.execute).toHaveBeenCalledWith('C::');
  });
});
