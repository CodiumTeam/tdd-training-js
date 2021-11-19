import { render, screen, within } from '@testing-library/react';
import DrinkMaker from './DrinkMaker';

test('Should render availables drinks', () => {
  render(<DrinkMaker />);

  const list = screen.getByRole('list');
  const drinkButton = within(list).getAllByRole('button');

  expect(drinkButton).toHaveLength(3);
});
