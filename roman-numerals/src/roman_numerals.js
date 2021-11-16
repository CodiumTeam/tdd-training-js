class RomanNumerals {
    toRoman(decimal) {
        let translation = {
          1: 'I',
          5: 'V',
        };
        if (decimal >= 1 && decimal < 5) {
            return translation[1] + this.toRoman(decimal - 1);
        } else if (decimal >= 5 && decimal < 10){
            return translation[5] + this.toRoman(decimal - 5);
        }
        return '';
    }
}

module.exports = RomanNumerals;
