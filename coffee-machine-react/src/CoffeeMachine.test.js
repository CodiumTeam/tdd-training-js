import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CoffeeMachine from './CoffeeMachine';
import { drinkMaker } from './drinkMaker';

test('Renders "Add sugar" button', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  expect(screen.getByText('+')).toBeVisible();
});

test('Renders "Remove Sugar" button', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  expect(screen.getByText('-')).toBeVisible();
});

test('Show the number of sugar put in a drink', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  expect(screen.getByText('0')).toBeVisible();
});

test('Render "Start" button as disabled state', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  const startButton = screen.getByText('Start');

  expect(startButton).toBeVisible();
});

test('Render "coins" text', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  const coinsText = screen.getByText('coins');

  expect(coinsText).toBeVisible();
});

test('Allow to enter coin value', function () {
  render(<CoffeeMachine drinkMaker={drinkMaker} />);

  const coinsInput = screen.getByRole('spinbutton');
  userEvent.type(coinsInput, '0.5');

  expect(coinsInput.value).toBe('0.5');
});
