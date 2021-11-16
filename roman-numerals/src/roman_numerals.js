class RomanNumerals {
    toRoman(decimal) {
        let translation = {
          1: 'I',
          5: 'V',
        };

        for (const value of Object.keys(translation).reverse()) {
            if (decimal >= value){
                return translation[value] + this.toRoman(decimal - value);
            }
        }
        return '';
    }
}

module.exports = RomanNumerals;
