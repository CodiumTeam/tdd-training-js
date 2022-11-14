let DrinkMaker = require('../src/drink_maker');
const {MyDrinkMaker, CoffeeMachine} = require("../src/coffee_machine");

describe('CoffeeMachine', function () {
  function createCoffeeMachine() {
    const maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
    const myMaker = new MyDrinkMaker(maker);
    const coffeeMachine = new CoffeeMachine(myMaker);
    return {maker, coffeeMachine};
  }

  it('User is able to select "Coffee" without sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('User is able to select "Tea" without sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectTea();

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Hot chocolate" without sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectHotChocolate();

    expect(maker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able select a product with one sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectOneSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:1:0');
  });

  it('User is able select a product with two sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
  });

  it('User is able select a product with 0 sugar', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectZeroSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('After ordering a product sugar level is reset to 0 (default value)', () => {
    const {maker, coffeeMachine} = createCoffeeMachine();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
    expect(maker.execute).toHaveBeenCalledWith('C::');
  });
});
