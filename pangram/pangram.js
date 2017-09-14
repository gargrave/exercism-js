'use strict';

function Pangram (str) {
  this.str = str;
}

Pangram.prototype.isPangram = function() {
  if (!this.str) {
    return false;
  }

  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
  let cleanStr = this.str.replace(/[\s_]/g, '').toLowerCase().split('').sort();
  let results = [];
  
  for (let i = 0; i < cleanStr.length; i++) {
    const char = cleanStr[i];
    if (!results.includes(char) && alpha.includes(char)) {
      results.push(char);
      if (results.length >= alpha.length) {
        return true;
      }
    }
  }
  return false;
}

module.exports = Pangram;
