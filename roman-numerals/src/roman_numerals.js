class RomanNumerals {
  toRoman(decimal) {
    if (decimal === 0) {
      return '';
    } else if (decimal === 1) {
      return 'I' + this.toRoman(0);
    } else if (decimal ===2){
      return 'I' + this.toRoman(1);
    } else if (decimal === 3) {
      return 'I' + this.toRoman(2);
    }
  }
}

module.exports = RomanNumerals;
