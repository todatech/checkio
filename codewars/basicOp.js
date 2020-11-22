const log = console.log;

function basicOp(operation, value1, value2) {

  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
  }
}

log(basicOp('+', 4, 7), 11);
log(basicOp('-', 15, 18), -3);
log(basicOp('*', 5, 5), 25);
log(basicOp('/', 49, 7), 7);