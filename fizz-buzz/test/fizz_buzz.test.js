const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  it('returns 100 elements', () => {
    let fizzBuzz = new FizzBuzz();

    let values = fizzBuzz.getValues();

    expect(values.length).toBe(100);
  });
});
