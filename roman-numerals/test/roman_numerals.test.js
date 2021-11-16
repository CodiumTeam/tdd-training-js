let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  test.each([
      [1, 'I'],
      [2, 'II'],
      [3, 'III'],
      [5, 'V'],
      [6, 'VI'],
      [7, 'VII'],
  ])('translate roman numerals (%s)', (decimal, romanNumber) => {
    let converter = new RomanNumerals();

    expect(converter.toRoman(decimal)).toBe(romanNumber);
  });
});
