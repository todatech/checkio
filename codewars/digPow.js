const assert = require('assert');
const log = console.log;

function digPow(n, p) {
  let nums = n.toString().split('');
  let lhs = 0;
  for (let i = 0; i < nums.length; i++) {
    lhs += parseInt(nums[i]) ** (p + i);
  }
  return (lhs % n) ? -1 : (lhs / n);
}

log(digPow(89, 1));

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51


if (true) {
  assert.equal(digPow(89, 1), 1);
  assert.equal(digPow(92, 1), -1);
  assert.equal(digPow(695, 2), 2);
  assert.equal(digPow(46288, 3), 51);

  log('test ok.')
}