const test = require('tape-catch')
const calculator = require('../string-calculator')()
const utils = require('../lib/utils')()

test('this test should simply should run and return true!', t => {
  t.plan(1)
  t.ok(true)
})
test('should get 0 for empty string', t => {
  t.plan(1)
  t.equal(calculator.add(''), 0)
})
test('should get a number for a *single string* passed as argument, like "1" or "2"', t => {
  t.equal(calculator.add('1'), 1)
  t.equal(calculator.add('2'), 2)
  t.end()
})
test('should get a number (the same number) for a *single random string*', t => {
  const randomNumber = utils.getRandomInt(0, 100)
  t.equal(calculator.add(randomNumber.toString()), randomNumber)
  t.end()
})
test('should get 4 for "2,2"', t => {
  t.plan(1)
  t.equal(calculator.add('2,2'), 4)
})

test('should get 9 for "3,3,3"', t => {
  t.plan(1)
  t.equal(calculator.add('3,3,3'), 9)
})
test("should get a sum for string with multiple separators: like \"1\\n2,3\" is 6 and like \"1,2\\4\" is 7", t => {
  t.plan(2)
  t.equal(calculator.add("1\n2,3"), 6)
  t.equal(calculator.add("1,2\n4"), 7)
})
test("should get a sum for string custom separator: \"//;\\n1;2\" separator is ; sum is 3", t => {
  t.plan(1)
  t.equal(calculator.add("\\;\n1;2"), 3)
})
test("should get a sum for string custom separator: \"//|\\n1|2\" separator is | sum is 3", t => {
  t.plan(2)
  t.equal(calculator.add("\\|\n1|2"), 3)
  t.equal(calculator.add("\\$\n1$2"), 3)
})
test("should get an exception if there are negative numbers: '2,-1,3'", t => {
  t.plan(2)
  t.throws(() => calculator.add('2,-1,3'), /Negatives not allowed: passed -1/)
  t.throws(() => calculator.add('-2,1,3'), /Negatives not allowed: passed -2/)
})


