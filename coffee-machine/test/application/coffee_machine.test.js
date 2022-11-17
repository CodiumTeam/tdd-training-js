let CoffeeMachine = require('../../src/application/coffee_machine');
let DrinkMaker = require('../../src/infrastructure/drink_maker');
const MyDrinkMaker = require("../../src/infrastructure/MyDrinkMaker");
const Order = require("../../src/domain/Order");

describe('CoffeeMachine', function () {

  let myDrinkMaker;
  beforeEach(() => {
    const maker = new DrinkMaker();
    myDrinkMaker = new MyDrinkMaker(maker);
    jest.spyOn(myDrinkMaker, 'processOrder');
  })

  it('User is able to select "Coffee" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.prepareCoffee();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 0));
  });

  it('User is able to select "Tea" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.prepareTea();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Tea', 0));
  });

  it('User is able to select "Hot chocolate" without sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.prepareHotChocolate();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Hot chocolate', 0));
  });

  it('User is able select a product with one sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.selectOneSugar();
    coffeeMachine.prepareCoffee();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 1));
  });

  it('User is able select a product with two sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.prepareCoffee();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 2));
  });

  it('User is able select a product with 0 sugar', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectZeroSugar();
    coffeeMachine.prepareCoffee();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 0));
  });

  it('After ordering a product sugar level is reset to 0 (default value)', () => {
    const coffeeMachine = new CoffeeMachine(myDrinkMaker);

    coffeeMachine.selectTwoSugar();
    coffeeMachine.prepareCoffee();
    coffeeMachine.prepareCoffee();

    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 2));
    expect(myDrinkMaker.processOrder).toHaveBeenCalledWith(new Order('Coffee', 0));
  });
});
