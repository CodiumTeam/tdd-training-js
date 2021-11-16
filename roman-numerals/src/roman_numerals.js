class RomanNumerals {
    toRoman(decimal) {
        if (decimal > 0 && decimal <= 3) {
            return 'I' + this.toRoman(decimal - 1);
        }
        return '';
    }
}

module.exports = RomanNumerals;
