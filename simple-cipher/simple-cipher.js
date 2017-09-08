const map = 'abcdefghijklmnopqrstuvwxyz'.split('');

function Cipher(key) {
  if (key === undefined) {
    this.key = 'aaaaaaaaaa';
  } else {
    if (!key.length) {
      throw new Error('Bad key');
    }
    for (let i = 0; i < key.length; i++) {
      const char = key[i];
      
      const isNumeric = Number.isInteger(parseInt(char));
      if (isNumeric) {
        throw new Error('Bad key');
      }

      const isUpperCase = map[map.indexOf(char.toLowerCase())].toUpperCase() === char;
      if (isUpperCase) {
        throw new Error('Bad key');
      }
    }
    this.key = key;
  }
}

Cipher.prototype.process = function(str, offsetMult) {
  let decoded = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let mapIdx = map.indexOf(char);
    let keyOffset = map.indexOf(this.key[i % this.key.length]);
    let offset = mapIdx + (keyOffset * offsetMult);
    debugger;
    if (offset < 0) {
      offset = map.length + offset;
    }
    decoded.push(map[offset % map.length]);
  }
  return decoded.join('');
}

Cipher.prototype.encode = function(str) {
  return this.process(str, 1);
}

Cipher.prototype.decode = function(str) {
  return this.process(str, -1);
}

module.exports = Cipher;
