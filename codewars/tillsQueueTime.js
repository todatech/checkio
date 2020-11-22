const log = console.log;
const assert = require('assert');

function queueTime(customers, n) {

  const waitArr = new Array(n).fill(0);

  customers.forEach(cust => {
    let idx = waitArr.indexOf(Math.min(...waitArr))
    waitArr[idx] += cust;
  })

  return Math.max(...waitArr);
}

log(queueTime([], 1), 0);
log(queueTime([1, 2, 3, 4], 1), 10);
log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
log(queueTime([1, 2, 3, 4, 5], 100), 5);