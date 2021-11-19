import { render, screen } from '@testing-library/react';
import DrinkMaker from './DrinkMaker';

test.each([['Tea'], ['Coffee'], ['Chocolate']])(
  'Should render "%s" button',
  (buttonText) => {
    render(<DrinkMaker />);

    const drinkButton = screen.getByText(buttonText);

    expect(drinkButton).toBeVisible();
  }
);
