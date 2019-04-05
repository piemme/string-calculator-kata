const test = require('tape-catch')
const calculator = require('../string-calculator')()

test('this test should simply should run and return true!', t => {
  t.plan(1)
  t.ok(true)
})

test('should get 0 for empty string', t => {
  t.plan(1)
  t.equal(0, calculator.add(''))
})
