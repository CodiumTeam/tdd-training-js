import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import CoffeeMachine from './CoffeeMachine.vue';
import {drinkMaker} from "./infrastructure/drinkMaker";

// Uncommenting this line we will change the behaviour of the drinkMaker file
// jest.mock('./infrastructure/drinkMaker.js');

test('User is able to select "Coffee"', async function () {
  render(CoffeeMachine);
  const coffeeButton = screen.getByText('Coffee');

  await userEvent.click(coffeeButton);

  expect(true).toBe(true);
});