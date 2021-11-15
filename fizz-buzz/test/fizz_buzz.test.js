const FizzBuzz = require('../src/fizz_buzz');

describe('FizzBuzz', () => {
  it('returns 100 elements', () => {
    let fizzBuzz = new FizzBuzz();

    let values = fizzBuzz.getValues();

    expect(values.length).toBe(100);
  });

  it('returns the number when is not multiple of 3, 5 nor 15', () => {
    let fizzBuzz = new FizzBuzz();

    let values = fizzBuzz.getValues();

    expect(values[0]).toBe(1);
    expect(values[1]).toBe(2);
    expect(values[3]).toBe(4);
  });
});
