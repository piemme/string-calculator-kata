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
test('should get a number for a *single string* passed as argument, like "1" or "2"', t => {
  t.equal(calculator.add('1'), 1)
  t.equal(calculator.add('2'), 2)
  t.end()
})
test('should get a number (the same number) for a *single random string*', t => {
  const randomNumber = getRandomInt(0, 100)
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

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

