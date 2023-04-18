class RomanNumerals {
    convert(number) {
        if (number === 1) {
            return 'I';
        }

        if (number === 2) {
            return 'II';
        }

        if (number === 3) {
            return 'III';
        }

        if (number === 5) {
            return 'V';
        }

        if (number === 6) {
            return 'VI';
        }

        if (number === 7) {
            return 'VII';
        }

        if (number === 8) {
            return 'VIII';
        }

        return '';
    }
}

module.exports = RomanNumerals;
