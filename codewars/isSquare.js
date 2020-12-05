const log = console.log;
const assert = require('assert');

var isSquare = function (n) {
  const a = Math.floor(Math.sqrt(n));
  return (n === a*a);
}


if (true) {
  log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
  log(isSquare(0), true, "0 is a square number (0 * 0)");
  log(isSquare(3), false, "3 is not a square number");
  log(isSquare(4), true, "4 is a square number (2 * 2)");
  log(isSquare(25), true, "25 is a square number (5 * 5)");
  log(isSquare(26), false, "26 is not a square number");

}