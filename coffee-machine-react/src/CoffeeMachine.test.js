import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CoffeeMachine from './CoffeeMachine';
import { drinkMaker } from './drinkMaker';

jest.mock('./drinkMaker.js');

describe('Iterations', () => {
  it('User is able to select "Coffee" without sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const coffeeButton = screen.getByText('Coffee');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');
    userEvent.click(coffeeButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C::');
  });

  it('User is able to select "Tea" without sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');
    userEvent.click(teaButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Chocolate" without sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Chocolate');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');
    userEvent.click(chocolateButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able to select "Tea" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(teaButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T:1:0');
  });

  it('User is able to select "Coffee" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const coffeeButton = screen.getByText('Coffee');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(coffeeButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C:1:0');
    expect(screen.getByText(1)).toBeVisible();
  });

  it('User is able to select "Chocolate" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Chocolate');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('H:1:0');
    expect(screen.getByText(1)).toBeVisible();
  });

  it('User is able to select "Tea" with two level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(teaButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T:2:0');
    expect(screen.getByText(2)).toBeVisible();
  });

  it('User is able to select "Coffee" with two level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const coffeeButton = screen.getByText('Coffee');
    const addSugarButton = screen.getByText('+');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(coffeeButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C:2:0');
    expect(screen.getByText(2)).toBeVisible();
  });

  it('User is able to select "Chocolate" with two level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Coffee');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C:2:0');
    expect(screen.getByText(2)).toBeVisible();
  });

  it('User is not able to add more than 2 of sugar into a drink', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Coffee');
    const coinInput = screen.getByRole('spinbutton');
    const addSugarButton = screen.getByText('+');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C:2:0');
    expect(screen.getByText(2)).toBeVisible();
  });

  it('User is able to select "Tea" adding two level and then removing one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Tea');
    const addSugarButton = screen.getByText('+');
    const removeSugarButton = screen.getByText('-');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.click(addSugarButton);
    userEvent.click(addSugarButton);
    userEvent.click(removeSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T:1:0');
  });

  it('User is not able to select lower than 0 level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Tea');
    const removeSugarButton = screen.getByText('-');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.click(removeSugarButton);
    userEvent.type(coinInput, '1');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T::');
    expect(screen.getByText('0')).toBeVisible();
  });
});

describe('Iteration II', () => {
  it('User is not able to buy "Tea" without enghout money', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(teaButton);
    userEvent.type(coinInput, '0.3');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith(
      'M:You need 0.1 to buy "Tea"'
    );
  });

  it('User is not able to buy "Coffee" without enghout money', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const coffeeButton = screen.getByText('Coffee');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(coffeeButton);
    userEvent.type(coinInput, '0.5');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith(
      'M:You need 0.1 to buy "Coffee"'
    );
  });

  it('User is not able to buy "Chocolate" without enghout money', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Chocolate');
    const coinInput = screen.getByRole('spinbutton');
    const startButton = screen.getByText('Start');

    userEvent.click(chocolateButton);
    userEvent.type(coinInput, '0.4');
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith(
      'M:You need 0.1 to buy "Chocolate"'
    );
  });
});
