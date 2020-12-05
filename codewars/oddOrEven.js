const log = console.log;
const assert = require('assert');

const oddOrEven = array => (array.reduce((k, v) => k + v, 0) % 2) ? 'odd' : 'even';

if (true) {
  log(oddOrEven([0]), 'even')
  log(oddOrEven([1]), 'odd')
  log(oddOrEven([]), 'even')

  log(oddOrEven([0, 1, 5]), 'even')
  log(oddOrEven([0, 1, 3]), 'even')
  log(oddOrEven([1023, 1, 2]), 'even')

  log(oddOrEven([0, -1, -5]), 'even')
  log(oddOrEven([0, -1, -3]), 'even')
  log(oddOrEven([-1023, 1, -2]), 'even')

  log(oddOrEven([0, 1, 2]), 'odd')
  log(oddOrEven([0, 1, 4]), 'odd')
  log(oddOrEven([1023, 1, 3]), 'odd')

  log(oddOrEven([0, -1, 2]), 'odd')
  log(oddOrEven([0, 1, -4]), 'odd')
  log(oddOrEven([-1023, -1, 3]), 'odd')
}