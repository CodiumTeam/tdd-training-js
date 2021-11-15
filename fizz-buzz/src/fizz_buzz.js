class FizzBuzz {

    getValues() {
        let values = [];
        for (let i = 0; i < 100; i++) {
            values.push(i + 1);
        }

        return values;
    }
}

module.exports = FizzBuzz;
