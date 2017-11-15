'use strict'

const Parser = (function () {
  const ops = {
    'plus': (a, b) => a + b,
    'minus': (a, b) => a - b,
    'multiplied': (a, b) => a * b,
    'divided': (a, b) => a / b,
  }

  function process([a, b, ...rest], [op, ...restOps], total) {
    if (b) {
      return process([b, ...rest], restOps, ops[op](total || Number(a), Number(b)))
    }
    return total
  }

  function parse (question) {
    const numbers = question.match(/-?\d+/g)
    const operators = question.match(/plus|minus|multiplied|divided/g)
    if (!numbers || !operators) {
      throw new ArgumentError()
    }
    return process(numbers, operators)
  }

  return {
    parse
  }
})()

class WordProblem {
  constructor (question) {
    this.question = question
  }

  answer () {
    return Parser.parse(this.question)
  }
}

class ArgumentError {}

module.exports = {
  WordProblem,
  ArgumentError,
}