'use strict'

// require deps
// SYNC init (like read conf file)

function  StringCalculator() {
  const SEPARATOR = ','

  const add = (numbers) => {
    if (!numbers) {
      return 0
    }
    const numbersToAdd = numbers.split(SEPARATOR).map(number => {
      return string2Number(number) 
    })
    return numbersToAdd.reduce( (a, b) =>  {
      return parseInt(a) + parseInt(b)
    }, 0)
  }
  const string2Number = number => parseInt(number)

  return {
    add: add
  }

}

module.exports = StringCalculator
