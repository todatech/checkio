const log = console.log;
const assert = require('assert');

function highAndLow(numbers) {
  const arr = numbers.split(' ');
  if (arr.length === 1)
    return arr[0] + ' ' + arr[0];
  return [Math.max(...arr), Math.min(...arr)].join(' ');
}


log(highAndLow("1 2 3 4 5"));  // return "5 1"
log(highAndLow("1"));
log(highAndLow("1 2 -3 4 5")); // return "5 -3"
log(highAndLow("1 9 3 4 -5")); // return "9 -5"