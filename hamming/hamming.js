'use strict'

class Hamming {
  compute (a, b) {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    const len = a.length
    let errors = 0
    for (let i = 0; i < len; i++) {
      errors += a[i] === b[i] ? 0 : 1
    }
    return errors
  }
}

module.exports = Hamming
