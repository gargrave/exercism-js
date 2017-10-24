'use strict'

class Matrix {
  constructor (numString) {
    this.rows = numString.split('\n')
      .map(s => s.split(' '))
      .map(arr => arr.map(n => Number(n)))

    this.columns = Array(this.rows[0].length)
      .fill(0)
      .map(() => Array(this.rows.length))
    this.rows.forEach((row, x) => {
      row.forEach((n, y) => {
        this.columns[y][x] = n
      })
    })
  }
}

module.exports = Matrix
