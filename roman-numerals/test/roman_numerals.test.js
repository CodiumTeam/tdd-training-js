let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
     test.each([
         [1, 'I'],
         [2, 'II'],
         [3, 'III'],
         [5, 'V'],
         [6, 'VI'],
         [7, 'VII'],
         [8, 'VIII'],
     ])(
        'For %i returns %s',
        (input, expected) => {
            let romanNumerals = new RomanNumerals();

            expect(romanNumerals.convert(input)).toBe(expected);
        }
    );
});
