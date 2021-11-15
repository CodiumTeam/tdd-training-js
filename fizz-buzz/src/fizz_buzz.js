class FizzBuzz {

    getValues() {
        let values = [];
        for (let i = 0; i < 100; i++) {
            let number = i + 1;
            if (number % 3 === 0) {
                values.push('Fizz');
            } else {
                values.push(number);
            }
        }

        return values;
    }
}

module.exports = FizzBuzz;
