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
    const startButton = screen.getByText('Start');
    userEvent.click(coffeeButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C::');
  });

  it('User is able to select "Tea" without sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const startButton = screen.getByText('Start');
    userEvent.click(teaButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T::');
  });

  it('User is able to select "Chocolate" without sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Chocolate');
    const startButton = screen.getByText('Start');
    userEvent.click(chocolateButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('H::');
  });

  it('User is able to select "Tea" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const teaButton = screen.getByText('Tea');
    const startButton = screen.getByText('Start');
    const addSugarButton = screen.getByText('+');

    userEvent.click(teaButton);
    userEvent.click(addSugarButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('T:1:0');
  });

  it('User is able to select "Coffee" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const coffeeButton = screen.getByText('Coffee');
    const startButton = screen.getByText('Start');
    const addSugarButton = screen.getByText('+');

    userEvent.click(coffeeButton);
    userEvent.click(addSugarButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('C:1:0');
  });

  it('User is able to select "Chocolate" with one level of sugar', () => {
    jest.spyOn(drinkMaker, 'execute');
    render(<CoffeeMachine drinkMaker={drinkMaker} />);

    const chocolateButton = screen.getByText('Chocolate');
    const startButton = screen.getByText('Start');
    const addSugarButton = screen.getByText('+');

    userEvent.click(chocolateButton);
    userEvent.click(addSugarButton);
    userEvent.click(startButton);

    expect(drinkMaker.execute).toHaveBeenCalledWith('H:1:0');
  });
});
