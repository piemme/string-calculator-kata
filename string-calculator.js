'use strict'

// require deps
// SYNC init (like read conf file)

function  StringCalculator() {
  const SEPARATORS = [',', '\n']
  const toNumber = (number) => parseInt(number)
  const convertAStringIntoNumbers = (numbers) => {
    const regularExpressionMultipleSeparators = new RegExp(SEPARATORS.join('|'), 'g') // ,|\n
    return numbers.split(regularExpressionMultipleSeparators)
  } 

  const add = (numbers) => {
    if (!numbers) {
      return 0
    }
    const numbersToAdd = convertAStringIntoNumbers(numbers).map(number => toNumber(number)) 
    return numbersToAdd.reduce( (a, b) =>  {
      return parseInt(a) + parseInt(b)
    }, 0)
  }
  return {
    add: add
  }
}

module.exports = StringCalculator
