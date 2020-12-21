const log = console.log;
const assert = require('assert');

function findSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!(i % 3) || !(i % 5))
      result += i;
  }
  return result;
}

log(findSum(5), 8);
log(findSum(10), 33);