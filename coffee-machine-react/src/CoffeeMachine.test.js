import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CoffeeMachine from './CoffeeMachine';
import { drinkMaker } from './drinkMaker';

jest.mock('./drinkMaker.js');

test('User is able to select "Coffee"', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);
  const coffeeButton = screen.getByText('Coffee');

  userEvent.click(coffeeButton);

  expect(true).toBe(true);
});
