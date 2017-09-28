'use strict';

class Binary {
  constructor(value) {
    this.value = value;
  }

  toDecimal() {
    if (this.value.match(/[^01]/g)) {
      return 0;
    }
    
    const len = this.value.length;
    let total = 0;

    for (let i = 0; i < len; i++) {
      const char = Number(this.value[len - 1 - i]);
      total += char * (2 ** i);
    }

    return total;
  }
}

module.exports = Binary;
