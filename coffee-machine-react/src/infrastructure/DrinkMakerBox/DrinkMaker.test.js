import { render, screen } from '@testing-library/react';
import { drinkMaker } from '../drinkMaker';
import DrinkMakerBox from './DrinkMakerBox';

describe('DrinkMakerPinter', () => {
  describe('DrinkMakerBox execution', () => {
    it('Should not call to drinkMaker is no command is given', () => {
      jest.spyOn(drinkMaker, 'execute');

      render(<DrinkMakerBox command={''} />);

      expect(drinkMaker.execute).not.toHaveBeenCalled();
      drinkMaker.execute.mockRestore();
    });

    it('Should not call to drinkMaker when command has not known commands', () => {
      jest.spyOn(drinkMaker, 'execute');

      render(<DrinkMakerBox command={'::'} />);

      expect(drinkMaker.execute).not.toHaveBeenCalled();
      drinkMaker.execute.mockRestore();
    });

    test.each([
      ['Tea', 'T:1:0'],
      ['Chocolate', 'H:1:0'],
      ['Coffee', 'C:1:0'],
      ['Orange', 'O:1:0'],
    ])(
      'Should call to drinkMaker when a "%s" with sugar and stick is given to it',
      (input, expected) => {
        jest.spyOn(drinkMaker, 'execute');

        render(<DrinkMakerBox command={expected} />);

        expect(drinkMaker.execute).toHaveBeenCalledWith(expected);
        drinkMaker.execute.mockRestore();
      }
    );

    test.each([
      ['Tea', 'T::'],
      ['Chocolate', 'H::'],
      ['Coffee', 'C::'],
      ['Orange', 'O::'],
    ])(
      'Should call to drinkMaker when a "%s" with no sugar and not stick is given to it',
      (input, expected) => {
        jest.spyOn(drinkMaker, 'execute');

        render(<DrinkMakerBox command={expected} />);

        expect(drinkMaker.execute).toHaveBeenCalledWith(expected);
        drinkMaker.execute.mockRestore();
      }
    );
  });

  test.each([
    ['T::', '/images/tea.png'],
    ['H::', '/images/chocolate.png'],
    ['C::', '/images/coffee.png'],
    ['O::', '/images/orange.png'],
  ])(
    'When a "%s" command is given. Should render a Tea image',
    (input, expected) => {
      render(<DrinkMakerBox command={input} />);

      const image = screen.getByRole('img');

      expect(image.src).toContain(expected);
    }
  );

  test.each([
    ['T:1:0', '/images/tea-with-sugar-stick.png'],
    ['H:1:0', '/images/chocolate-with-sugar-stick'],
    ['C:1:0', '/images/coffee-with-sugar-stick.png'],
    ['O:1:0', '/images/orange-with-sugar-stick.png'],
  ])(
    'When a "%s" command is given. Should render a Tea image',
    (input, expected) => {
      render(<DrinkMakerBox command={input} />);

      const image = screen.getByRole('img');

      expect(image.src).toContain(expected);
    }
  );

  test.each([
    ['T:2:0', '/images/tea-with-two-sugar-stick.png'],
    ['H:2:0', '/images/chocolate-with-two-sugar-stick.png'],
    ['C:2:0', '/images/coffee-with-two-sugar-stick.png'],
    ['O:2:0', '/images/orange-with-two-sugar-stick.png'],
  ])(
    'When a "%s" command is given. Should render a Tea image',
    (input, expected) => {
      render(<DrinkMakerBox command={input} />);

      const image = screen.getByRole('img');

      expect(image.src).toContain(expected);
    }
  );

  test('When a Message command is given to it. Should not render image', () => {
    render(
      <DrinkMakerBox
        command={'M:This is a message'}
      />
    );

    const image = screen.queryByRole('img');

    expect(image).not.toBeInTheDocument();
  });

  test('When a Message command is given to it. Should show message to the user', () => {
    render(
      <DrinkMakerBox
        command={'M:This is a message'}
      />
    );

    const message = screen.getByText('This is a message');

    expect(message).toBeVisible();
  });
});
