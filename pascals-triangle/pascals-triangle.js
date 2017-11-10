'use strict'

class Triangle {
  constructor (rowCount) {
    this.buildRows(rowCount)
  }

  buildRows (count) {
    this._rows = []
    
    for (let i = 0; i < count; i++) {
      const newRow = Array(i + 1).fill(1)

      if (i > 1) {
        const aboveRow = this._rows[i - 1]
        const len = newRow.length - 1
        for (let j = 1; j < len; j++) {
          newRow[j] = aboveRow[j - 1] + aboveRow[j]
        }
      }

      this._rows.push(newRow)
    }
  }

  get rows () {
    return this._rows
  }

  get lastRow () {
    return this._rows[this._rows.length - 1]
  }
}

module.exports = Triangle
