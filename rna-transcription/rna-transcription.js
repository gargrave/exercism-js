function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(str) {
  const charMap = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }

  function replace(orig) {
    return orig.split('').map(c => {
      if (c in charMap) {
        return charMap[c];
      }
      throw new Error('Invalid input');
    });
  }

  return replace(str).join('');
}

module.exports = DnaTranscriber;