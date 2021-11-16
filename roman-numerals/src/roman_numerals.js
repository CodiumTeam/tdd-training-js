class RomanNumerals {
    toRoman(decimal) {
        let translation = {
          1: 'I',
          5: 'V',
          10: 'X',
        };
        let values = Object.keys(translation);
        if (decimal >= values[0] && decimal < values[1]) {
            return translation[1] + this.toRoman(decimal - 1);
        } else if (decimal >= values[1] && decimal < values[2]){
            return translation[5] + this.toRoman(decimal - 5);
        }
        return '';
    }
}

module.exports = RomanNumerals;
