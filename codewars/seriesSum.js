const log = console.log;
const assert = require('assert');

function SeriesSum(n) {

  if (!n) return '0.00';

  function ss(n) {
    if (n === 1) return 1;
    else return 1 / (1 + 3 * (n - 1)) + ss(n - 1);
  }

  return ss(n).toFixed(2).toString();
}

if (true) {
  log(SeriesSum(0), "0.00")
  log(SeriesSum(1), "1.00")
  log(SeriesSum(2), "1.25")
  log(SeriesSum(3), "1.39")
  log(SeriesSum(4), "1.49")
}