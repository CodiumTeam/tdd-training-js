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

    expect(drinkMaker.execute).toHaveBeenCalledWith('T::');
  });
});
