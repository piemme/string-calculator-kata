'use strict'

// require deps
// SYNC init (like read conf file)

function  StringCalculator() {
  const DEFAULT_SEPARATORS = [',', '\n']

  const toNumber = (number) => parseInt(number)
  const validateNumber = (number) => {
    if (Math.sign(number) === -1) {
      throw new Error(`Negatives not allowed: passed ${number}`)
    }
    return number
  }
  const convertAStringIntoNumbers = (numbers, separators) => {
    const regularExpressionMultipleSeparators = new RegExp(separators.join('|'), 'g') // ,|\n
    return numbers.split(regularExpressionMultipleSeparators)
  } 
  const inputAsCustomPatternForSeparator = (input) => input.startsWith('\\')
  const getCustomSeparator = (input) => {
    if (inputAsCustomPatternForSeparator(input)) {
      return [input.split('\n')[0]]
    }
    return DEFAULT_SEPARATORS
  }
  const getNumbers = (input) => {
    if (inputAsCustomPatternForSeparator(input)) {
      return input.split('\n')[1]
    }
    return input
  }

  const add = (input) => {
    if (!input) {
      return 0
    }
    let numbers = getNumbers(input)
    let separators = getCustomSeparator(input)
    const numbersToAdd = convertAStringIntoNumbers(numbers, separators).map(number => validateNumber(toNumber(number)))
    return numbersToAdd.reduce( (a, b) =>  {
      return parseInt(a) + parseInt(b)
    }, 0)
  }
  return {
    add: add
  }
}

module.exports = StringCalculator
