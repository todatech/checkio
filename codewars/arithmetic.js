const log = console.log;
const assert = require('assert');

function arithmetic(a, b, operator) {
  const op = {
    add(a, b) {
      return a + b;
    },
    subtract(a, b) {
      return a - b;
    },
    multiply(a, b) {
      return a * b;
    },
    divide(a, b) {
      return a / b;
    }
  }
  return op[operator](a, b);
}

log(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
log(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
log(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
log(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");