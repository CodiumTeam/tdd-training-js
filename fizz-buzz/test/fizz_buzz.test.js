const FizzBuzz = require('../src/fizz_buzz');
const expect = require("expect");

describe('FizzBuzz', () => {
  it('should return 100 elements', () => {
    const fizzBuzz = new FizzBuzz();

    const list = fizzBuzz.generateList();

    expect(list.length).toBe(100);
  });

  it('should return numbers when other rules do not apply', () => {
    const fizzBuzz = new FizzBuzz();

    const list = fizzBuzz.generateList();

    validatePosition(list, 1, '1');
    validatePosition(list, 2, '2');
    validatePosition(list, 4, '4');
  });

  it('should return Fizz when multiple of 3', () => {
    const fizzBuzz = new FizzBuzz();

    const list = fizzBuzz.generateList();

    validatePosition(list, 3, 'Fizz');
    validatePosition(list, 6, 'Fizz');
    validatePosition(list, 9, 'Fizz');
  });

  it('should return Buzz when multiple of 5', () => {
    const fizzBuzz = new FizzBuzz();

    const list = fizzBuzz.generateList();

    validatePosition(list, 5, 'Buzz');
    validatePosition(list, 10, 'Buzz');
    validatePosition(list, 20, 'Buzz');
  });

  it('should return FizzBuzz when multiple of 15', () => {
    const fizzBuzz = new FizzBuzz();

    const list = fizzBuzz.generateList();

    validatePosition(list, 15, 'FizzBuzz');
    validatePosition(list, 30, 'FizzBuzz');
    validatePosition(list, 45, 'FizzBuzz');
  });

  function validatePosition(list, position, expected) {
    expect(list[position - 1]).toBe(expected);
  }
});

