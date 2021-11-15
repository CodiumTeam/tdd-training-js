class FizzBuzz {

    getValues() {
        let values = [];
        for (let i = 0; i < 100; i++) {
            if (i !== 1) {
                values.push(1);
            } else {
                values.push(2);
            }
        }
        return values;
    }
}

module.exports = FizzBuzz;
