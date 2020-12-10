const log = console.log;
const assert = require('assert');

function sumDigPow(a, b) {
  let result = [];
  for (let i = a; i <= b; i++) {
    const sum = i.toString()
      .split('')
      .reduce((k, v, j) => k += Math.pow(parseInt(v, 10), (j + 1)), 0);
    if (i === sum)
      result.push(i);
  }
  return result;
}

log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
log(sumDigPow(10, 100), [89])
log(sumDigPow(90, 100), [])
log(sumDigPow(90, 150), [135])
log(sumDigPow(50, 150), [89, 135])
log(sumDigPow(10, 150), [89, 135])