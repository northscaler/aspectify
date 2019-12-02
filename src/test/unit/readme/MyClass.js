'use strict'

const logError = require('./logError')

class MyClass {
  @logError
  add (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('only numbers allowed')
    }
    return a + b
  }
}

module.exports = MyClass
