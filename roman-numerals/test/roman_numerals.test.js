let RomanNumerals = require('../src/roman_numerals');

describe('Roman Numerals', () => {
  test.each([
      [1, 'I']
  ])('translate roman numerals (%s)', (decimal, romanNumber) => {
    let converter = new RomanNumerals();

    expect(converter.toRoman(decimal)).toBe(romanNumber);
  });
});
