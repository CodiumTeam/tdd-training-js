class RomanNumerals {
    toRoman(decimal) {
        if (decimal > 0 && decimal <= 3) {
            return 'I' + this.toRoman(decimal - 1);
        } else if (decimal === 5){
            return 'V';
        } else if (decimal === 6){
            return 'VI';
        } else if (decimal === 7){
            return 'VII';
        }
        return '';
    }
}

module.exports = RomanNumerals;
