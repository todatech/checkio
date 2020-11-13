const assert = require('assert');
const log = console.log;

function numberToPrice(num) {

  const parsed = parseFloat(num)

  if (isNaN(parsed) || (parsed !== num)) return 'NaN';

  const arr = Array.from(num.toFixed(3));
  arr.pop();
  const neg = (arr[0] === '-') ? arr.shift() : undefined;
  const idx = arr.lastIndexOf('.');

  for (let i = 0; i < arr.length - 3; i++) {
    (!(i % 3) && (i !== 0) && ((idx - i) !== 0)) ? arr.splice(idx - i, 0, ',') : 0;
  }
  if (neg) arr.unshift(neg);
  return (arr.join(''))
}

log(numberToPrice(1322253.5123));

log(numberToPrice(1500.129));
log(numberToPrice(-5));
log(numberToPrice(1000000.5));
log(numberToPrice('@'));
log(numberToPrice(-200000.1))
log(numberToPrice("1.1.1"));