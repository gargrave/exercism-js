'use strict'

function powersOf (num, len) {
  const arr = Array(len)
    .fill(1)
    .map((val, i) => num ** (val * i))
  return arr
}

function toBinary (num) {
  if (num === 0 || num === 1) {
    return [`${num}`]
  }

  const pows = powersOf(2, 8)
  const len = pows.indexOf(pows.find(n => n > num))
  const binary = Array(len).fill(0)

  for (let i = 0; i < len; i++) {
    const compare = pows[len - (i + 1)]
    if (num >= compare) {
      binary[i] = 1
      num -= compare
    }
  }

  return binary
}

function parseCommand (arr, val, i) {
  const commandMap = [
    'wink',
    'double blink',
    'close your eyes',
    'jump'
  ]

  if (Number(val) === 1) {
    if (i === 4) {
      return Object.assign([], arr.reverse())
    } else {
      return [...arr, commandMap[i]]
    }
  }
  return arr
}

class SecretHandshake {
  constructor (num) {
    if (typeof num !== 'number') {
      throw new Error('Handshake must be a number')
    }
    this.num = num
  }

  commands () {
    const bin = toBinary(this.num).reverse()
    const len = bin.length
    let arr = []

    for (let i = 0; i < len; i++) {
      arr = parseCommand(arr, bin[i], i)
    }
    return arr
  }
}

module.exports = SecretHandshake
