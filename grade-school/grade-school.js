'use strict'

class School {
  constructor () {
    this._roster = {}
  }

  add (name, grade) {
    const previousGrade = this._roster[grade] || []
    const newGrade = [...previousGrade, name].sort()
    this._roster = Object.assign({}, 
      this._roster, 
      { [grade]: newGrade }
    )
  }

  roster () {
    return Object.assign({}, this._roster)
  }

  grade (num) {
    return Object.assign([], this._roster[num] || [])
  }
}

module.exports = School
