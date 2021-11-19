import { render, screen, within } from '@testing-library/react';
import DrinkMaker from './DrinkMaker';

test('Should render availables drinks', () => {
  render(<DrinkMaker />);

  const list = screen.getByRole('list');
  const drinkButton = within(list).getAllByRole('button');

  expect(drinkButton).toHaveLength(3);
  expect(drinkButton[0]).toHaveTextContent('Tea');
  expect(drinkButton[1]).toHaveTextContent('Coffee');
  expect(drinkButton[2]).toHaveTextContent('Chocolate');
});
