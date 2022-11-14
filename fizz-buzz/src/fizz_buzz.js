class FizzBuzz {

  generateList() {
    const list = [];

    for (let i = 0; i < 100; i++) {
      if (this._isFizzBuzz(i)) {
        list.push('FizzBuzz');
      } else if (this._isFizz(i)) {
        list.push('Fizz');
      } else if (this._isBuzz(i)) {
        list.push('Buzz');
      } else {
        list.push("" + (i + 1));
      }
    }
    return list;
  }

  _isFizzBuzz(i) {
    return this._isFizz(i) && this._isBuzz(i);
  }

  _isFizz(i) {
    return (i + 1) % 3 === 0;
  }

  _isBuzz(i) {
    return (i + 1) % 5 === 0;
  }
}

module.exports = FizzBuzz;
