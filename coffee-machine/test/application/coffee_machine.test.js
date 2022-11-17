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

  // it('User is able to select "Tea" without sugar', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectTea();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('T::');
  // });
  //
  // it('User is able to select "Hot chocolate" without sugar', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectHotChocolate();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('H::');
  // });
  //
  // it('User is able select a product with one sugar', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectOneSugar();
  //   coffeeMachine.selectCoffee();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('C:1:0');
  // });
  //
  // it('User is able select a product with two sugar', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectTwoSugar();
  //   coffeeMachine.selectCoffee();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('C:2:0');
  // });
  //
  // it('User is able select a product with 0 sugar', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectTwoSugar();
  //   coffeeMachine.selectZeroSugar();
  //   coffeeMachine.selectCoffee();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('C::');
  // });
  //
  // it('After ordering a product sugar level is reset to 0 (default value)', () => {
  //   const coffeeMachine = new CoffeeMachine(myDrinkMaker);
  //
  //   coffeeMachine.selectTwoSugar();
  //   coffeeMachine.selectCoffee();
  //   coffeeMachine.selectCoffee();
  //
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('C:2:0');
  //   expect(myDrinkMaker.processOrder).toHaveBeenCalledWith('C::');
  // });
});
