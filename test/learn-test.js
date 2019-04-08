const test = require('tape-catch') // assign the tape library to the variable "test"

test('should run!', t => {
  t.plan(1)
  t.ok(true)
})
test('should fail!', t => {
  t.plan(1)
  t.notOk(false)
})
const functionWithException = () => {
  throw new Error('boom boom')
}
test('should throw an exception', t => {
  t.plan(2)
  t.throws(functionWithException, 'bang')
  t.throws(() => functionWithException(), /boom boom/)
})
const sum = function (a, b) {
  return (a + b)
}
test('should get the sum of two integers', t => {
  t.plan(1)
  t.equal(3, sum(2, 1))
})
