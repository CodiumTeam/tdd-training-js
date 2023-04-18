class RomanNumerals {
    convert(number) {
        const numbers = {
            1: 'I',
            5: 'V'
        }
        if (number === 1) {
            return numbers[1] + this.convert(number - 1);
        }
        if (number === 2) {
            return numbers[1] + this.convert(number - 1);
        }
        if (number === 3) {
            return numbers[1] + this.convert(number - 1);
        }
        if (number === 5) {
            return numbers[5] + this.convert(number - 5);
        }
        if (number === 6) {
            return numbers[5] + this.convert(number - 5);
        }
        if (number === 7) {
            return numbers[5] + this.convert(number - 5);
        }
        if (number === 8) {
            return numbers[5] + this.convert(number - 5);
        }

        return '';
    }
}

module.exports = RomanNumerals;
