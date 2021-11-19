import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CoffeeMachine from './CoffeeMachine';

test('Render a Message panel', () => {
  render(<CoffeeMachine />);
  const alert = screen.getByRole('alert');

  expect(alert).toBeVisible();
});

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

  expect(screen.getByText('+')).toBeVisible();
});

test('Renders "Remove Sugar" button', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('-')).toBeVisible();
});

test('Show the number of sugar put in a drink', function () {
  render(<CoffeeMachine />);

  expect(screen.getByText('0')).toBeVisible();
});

test('Show render "Start" button as disabled state', function () {
  render(<CoffeeMachine />);

  const startButton = screen.getByText('Start');

  expect(startButton).toBeVisible();
  expect(startButton).toBeDisabled();
});

test('When user select "Tea" as Drink. Could click on "Start" button', function () {
  render(<CoffeeMachine />);

  const teaButton = screen.getByRole('button', { name: 'Tea' });
  userEvent.click(teaButton);
  const startButton = screen.getByText('Start');

  expect(startButton).not.toBeDisabled();
});

test('When user select "Tea" as Drink and click on Start. Should see "T" on message', function () {
  render(<CoffeeMachine />);
  const teaButton = screen.getByRole('button', { name: 'Tea' });
  userEvent.click(teaButton);
  const startButton = screen.getByText('Start');
  userEvent.click(startButton);

  const alert = screen.getByRole('alert');

  expect(alert).toHaveTextContent('T');
});

test('When user select "Coffee" as Drink and click on Start. Should see "C" on message', function () {
  render(<CoffeeMachine />);
  const teaButton = screen.getByRole('button', { name: 'Coffee' });
  userEvent.click(teaButton);
  const startButton = screen.getByText('Start');
  userEvent.click(startButton);

  const alert = screen.getByRole('alert');

  expect(alert).toHaveTextContent('C');
});
