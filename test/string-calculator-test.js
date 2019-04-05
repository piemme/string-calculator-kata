const test = require('tape-catch')
const calculator = require('../string-calculator')()

test('this test should simply should run and return true!', t => {
  t.plan(1)
  t.ok(true)
})

test('should get 0 for empty string', t => {
  t.plan(1)
  t.equal(calculator.add(''), 0)
})
test('should get 1 for "1"', t => {
  t.plan(1)
  t.equal(calculator.add('1'), 1)
})
test('should get 2 for "2"', t => {
  t.plan(1)
  t.equal(calculator.add('2'), 2)
})
test('should get 4 for "2,2"', t => {
  t.plan(1)
  t.equal(calculator.add('2,2'), 4)
})
