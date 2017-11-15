'use strict'

const Factory = (function () {
  const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const usedNames = {}
  
  function randomAlpha () {
    return alpha[Math.floor(Math.random() * alpha.length)]
  }
  
  function randomNumber () {
    return Math.floor(Math.random() * 10)
  }
  
  function generateName () {
    let name = null
    while (!name || name in usedNames) {
      name = 
        randomAlpha() +
        randomAlpha() +
        randomNumber() +
        randomNumber() +
        randomNumber()
    }
    return name
  }
  
  function getNewName (oldName = '') {
    if (oldName in usedNames) {
      usedNames[oldName] = false
    }
    
    const newName = generateName()
    usedNames[newName] = true
    return newName
  }

  return {
    getNewName
  }
})()

class Robot {
  constructor () {
    this.name = Factory.getNewName()
  }

  reset () {
    this.name = Factory.getNewName(this.name)
  }
}

module.exports = Robot
