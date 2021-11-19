import { render, screen, within } from '@testing-library/react';
import CoffeeMachine from './CoffeeMachine';

test('Should render availables drinks', () => {
  render(<CoffeeMachine />);

  const list = screen.getByRole('list');
  const drinkButton = within(list).getAllByRole('button');

  expect(drinkButton).toHaveLength(3);
  expect(drinkButton[0]).toHaveTextContent('Tea');
  expect(drinkButton[1]).toHaveTextContent('Coffee');
  expect(drinkButton[2]).toHaveTextContent('Chocolate');
});

test('There are a "Select your drink" text', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('Select your drink')).toBeVisible();
});

test('Renders "Add sugar" button', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('Add')).toBeVisible();
});

test('Renders "Remove Sugar" button', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('Remove')).toBeVisible();
});

test('Show the number of sugar put in a drink', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('Total Sugar: 0')).toBeVisible();
});
