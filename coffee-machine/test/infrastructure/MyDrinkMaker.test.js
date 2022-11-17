const DrinkMaker = require("../../src/infrastructure/drink_maker");
const MyDrinkMaker = require("../../src/infrastructure/MyDrinkMaker");
const Order = require("../../src/domain/Order");
describe('MyDrinkMaker', function () {

  it('processes Order: Coffee 0 sugar', () => {
    const maker = new DrinkMaker();
    const myDrinkMaker = new MyDrinkMaker(maker);
    jest.spyOn(maker, 'execute');

    myDrinkMaker.processOrder(new Order('Coffee', 0))

    expect(maker.execute).toHaveBeenCalledWith('C::');
  });

  it('processes Order: Tea 0 sugar', () => {
    const maker = new DrinkMaker();
    const myDrinkMaker = new MyDrinkMaker(maker);
    jest.spyOn(maker, 'execute');

    myDrinkMaker.processOrder(new Order('Tea', 0))

    expect(maker.execute).toHaveBeenCalledWith('T::');
  });
});
