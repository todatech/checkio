const log = console.log;
const assert = require('assert');

const add = function (a, b) {
  let sum = a ^ b;
  let carry = (a & b) << 1;
  if (sum & carry)
    return add(sum, carry);
  else
    return sum ^ carry;
}

const sub = function (a, b) {
  if (b == 0)
    return a;
  return sub(a ^ b, (~a & b) << 1);
}

const mod = function (a, b) {
  while (a >= b) { a = sub(a, b); }
  return a;
}


function calc(a, b, operator) {
  switch (operator.charCodeAt(0)) {
    case 43: return add(a, b);
    case 45: return sub(a, b);
    case 42: return Math.imul(a, b);
    case 47: return (b === 0) ? NaN : Math.tan(Math.atan2(a, b)).toFixed(3).toString().slice(0, -1);
    case 37: return (b === 0) ? NaN : Math.mod(a, b);
  }
  return NaN;
}

log(calc(5, 3, '/'));
// log(Math.sub(54,20))

if (true) {
  assert.deepEqual(calc(0, 12, "+"), 12);
  assert.deepEqual(calc(21, 12, "+"), 33);

  assert.deepEqual(calc(54, 20, "-"), 34);
  assert.deepEqual(calc(20, 54, "-"), -34);

  assert.deepEqual(calc(4, 5, "*"), 20);
  assert.deepEqual(calc(5, 0, "*"), 0);

  assert.deepEqual(calc(10, 5, "/"), 2);
  assert.deepEqual(calc(1, 2, "/"), 0.5);
  assert.equal(calc(5, 3, "/"), 1.66);
  assert.deepEqual(calc(5, 0, "/"), NaN);

  assert.deepEqual(calc(10, 5, "%"), 0);
  assert.deepEqual(calc(1, 2, "%"), 1);
  assert.deepEqual(calc(5, 3, "%"), 2);
  assert.deepEqual(calc(5, 0, "%"), NaN);
  log('test ok...');
}