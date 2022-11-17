let DrinkMaker = require('../src/drink_maker');
const {CoffeeMachine} = require("../src/coffee_machine");
const MyDrinkMaker = require('../src/my_drink_maker');
const Order = require('../src/order');

describe('CoffeeMachine', function () {
  let maker;

  beforeEach(() => {
    maker = new DrinkMaker();
    jest.spyOn(maker, 'execute');
  });

  it('User is able to select "Coffee" without sugar', () => {
    const myMaker = new MyDrinkMaker();
    jest.spyOn(myMaker, 'processOrder').mockImplementation();
    const coffeeMachine = new CoffeeMachine(myMaker);

    coffeeMachine.addMoney(200)
    coffeeMachine.selectCoffee();

    let expectedOrder = new Order('Coffee', 0, 200, false);
    expect(myMaker.processOrder).toHaveBeenCalledWith(expectedOrder);
  });

  it('User is able to select "Tea" without sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectTea();

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Hot chocolate" without sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectHotChocolate();

    expect(maker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able to select "Orange" without sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectOrange();

    expect(maker.execute).toHaveBeenCalledWith('O::');
  });

  it('User is able select a product with one sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectOneSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:1:0');
  });

  it('User is able select a product with two sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
  });

  it('User is able select a product with 0 sugar', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectZeroSugar();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('After ordering a product sugar level is reset to 0 (default value)', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectTwoSugar();
    coffeeMachine.selectCoffee();
    coffeeMachine.addMoney(100);
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C:2:0');
    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('Not enough money for Coffee', () => {
    const coffeeMachine = createCoffeeMachine();

    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('M:Missing 40cents');
  });

  it('Not enough money for Tea', () => {
    const coffeeMachine = createCoffeeMachine();

    coffeeMachine.selectTea();

    expect(maker.execute).toHaveBeenCalledWith('M:Missing 60cents');
  });

  it('Not enough money for Hot chocolate', () => {
    const coffeeMachine = createCoffeeMachine();

    coffeeMachine.selectHotChocolate();

    expect(maker.execute).toHaveBeenCalledWith('M:Missing 50cents');
  });

  it('Not enough money for Coffee when some money has been added', () => {
    const coffeeMachine = createCoffeeMachine();

    coffeeMachine.addMoney(10);
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('M:Missing 30cents');
  });

  it('Money resets after each valid order', () => {
    const coffeeMachine = createCoffeeMachine();

    coffeeMachine.addMoney(200);
    coffeeMachine.selectCoffee();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('C::');
    expect(maker.execute).toHaveBeenCalledWith('M:Missing 40cents');
  });

  it('User is able to select extra hot "Coffee"', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectExtraHot();
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('Ch::');
  });

  it('After ordering an extra hot product extraHot level is reset false', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectExtraHot();
    coffeeMachine.selectCoffee();
    coffeeMachine.addMoney(100);
    coffeeMachine.selectCoffee();

    expect(maker.execute).toHaveBeenCalledWith('Ch::');
    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('After ordering an extra hot product extraHot level is reset false', () => {
    const coffeeMachine = createCoffeeMachineWithEnoughMoney();

    coffeeMachine.selectExtraHot();
    coffeeMachine.selectOrange();

    expect(maker.execute).toHaveBeenCalledWith('M:Cannot prepare extra hot Orange juice');
    // expect(maker.execute).toHaveBeenCalledWith('O::'); // another possible implementation
  });

  function createCoffeeMachine() {
    const myMaker = new MyDrinkMaker(maker);
    return new CoffeeMachine(myMaker);
  }

  function createCoffeeMachineWithEnoughMoney() {
    const coffeeMachine = createCoffeeMachine();
    coffeeMachine.addMoney(200);
    return coffeeMachine;
  }

});

