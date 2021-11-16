class RomanNumerals {
  toRoman(decimal) {
    if (decimal === 0) {
      return '';
    } else if (decimal === 1) {
      return 'I' + this.toRoman(decimal - 1);
    } else if (decimal ===2){
      return 'I' + this.toRoman(decimal - 1);
    } else if (decimal === 3) {
      return 'I' + this.toRoman(decimal - 1);
    }
  }
}

module.exports = RomanNumerals;
