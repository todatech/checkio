const log = console.log;
const assert = require('assert');

const sequenceSum = (begin, end, step) => {

  let sum = 0;
  for (let i = begin; i <= end; i += step)
    sum += i;
  return sum;
};

log(sequenceSum(2, 6, 2), 12)
log(sequenceSum(1, 5, 1), 15)
log(sequenceSum(1, 5, 3), 5)