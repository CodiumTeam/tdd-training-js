import { render, screen } from '@testing-library/react';
import { drinkMaker } from '../../drinkMaker';
import DrinkMakerOutput from './DrinkMakerOutput';

describe('DrinkMakerPinter', () => {
  describe('DrinkMaker execution', () => {
    it('Should not call to drinkMaker is no command is given', () => {
      jest.spyOn(drinkMaker, 'execute');

      render(<DrinkMakerOutput drinkMaker={drinkMaker} command={''} />);

      expect(drinkMaker.execute).not.toHaveBeenCalled();
      drinkMaker.execute.mockRestore();
    });

    it('Should not call to drinkMaker when command has not known commands', () => {
      jest.spyOn(drinkMaker, 'execute');

      render(<DrinkMakerOutput drinkMaker={drinkMaker} command={'::'} />);

      expect(drinkMaker.execute).not.toHaveBeenCalled();
      drinkMaker.execute.mockRestore();
    });

    it('Should throw an error if a invalid command is given to it', () => {
      const oldConsoleError = console.error;
      console.error = jest.fn();
      jest.spyOn(drinkMaker, 'execute');

      expect(() => {
        render(<DrinkMakerOutput drinkMaker={drinkMaker} command={'T1'} />);
      }).toThrowError(`Command "T1" is not a valid command`);
      console.error = oldConsoleError;
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

        render(<DrinkMakerOutput drinkMaker={drinkMaker} command={expected} />);

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

        render(<DrinkMakerOutput drinkMaker={drinkMaker} command={expected} />);

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
      render(<DrinkMakerOutput drinkMaker={drinkMaker} command={input} />);

      const image = screen.getByRole('img');

      expect(image.src).toContain(expected);
    }
  );
});

test('When a Message command is given to it. Should not render image', () => {
  render(
    <DrinkMakerOutput drinkMaker={drinkMaker} command={'M:This is a message'} />
  );

  const image = screen.queryByRole('img');

  expect(image).not.toBeInTheDocument();
});

test('When a Message command is given to it. Should show message to the user', () => {
  render(
    <DrinkMakerOutput drinkMaker={drinkMaker} command={'M:This is a message'} />
  );

  const message = screen.getByText('This is a message');

  expect(message).toBeVisible();
});
