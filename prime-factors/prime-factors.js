'use strict'

const range = (max) => {
  const values = []
  for (let i = 0; i < max; i++) {
    values.push(i)
  }
  return values
}

const isPrime = (val) => {
  if (val === 2) {
    return true
  }
  if (val < 2 || val % 2 === 0) {
    return false
  }

  const sqrt = Math.sqrt(val)
  if (Number.isInteger(sqrt)) {
    return false
  }

  const max = Math.ceil(sqrt)
  for (let i = 3; i < max; i += 2) {
    if (val % i === 0) {
      return false
    }
  }
  return true
}

const primes = range(999999).filter(x => isPrime(x))

module.exports = {
  for (n) {
    if (n === 1) {
      return []
    }
    if (primes.includes(n)) {
      return [n]
    }
    return factor(n)
    
    function factor (x, factors = []) {
      if (x === 1) {
        return factors
      }

      for (let i = 0; i < primes.length; i++) {
        const p = primes[i]
        if (x % p === 0) {
          return factor(x / p, [...factors, p])
        }
      }
    }
  }
}
