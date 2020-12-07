const log = console.log;
const assert = require('assert');

const countPositivesSumNegatives = input => input.reduce((k, v) => {
  if (v > 0) {
    k[0] ? k[0] += 1 : k[0] = 1;
  } else {
    k[1] ? k[1] += v : k[1] = v;
  }
  return k;
}, []);

var testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var actual = countPositivesSumNegatives(testData);
var expected = [10, -65];

log(actual[0] == expected[0] && actual[1] == expected[1], "Wrong return value.");

testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
actual1 = countPositivesSumNegatives(testData1);
expected1 = [8, -50];

log(actual1[0] == expected1[0] && actual1[1] == expected1[1], "Wrong return value.");