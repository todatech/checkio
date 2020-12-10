const log = console.log;
const assert = require('assert');

function expressionMatter(a, b, c) {
  let lst = [
    a + b + c,
    (a + b) * c,
    a * (b + c),
    a * b * c,
  ]
  return Math.max(...lst);
}

log(expressionMatter(2, 1, 2), 6);
log(expressionMatter(2, 1, 1), 4);
log(expressionMatter(1, 1, 1), 3);
log(expressionMatter(1, 2, 3), 9);
log(expressionMatter(1, 3, 1), 5);
log(expressionMatter(2, 2, 2), 8);

log(expressionMatter(5, 1, 3), 20);
log(expressionMatter(3, 5, 7), 105);
log(expressionMatter(5, 6, 1), 35);
log(expressionMatter(1, 6, 1), 8);
log(expressionMatter(2, 6, 1), 14);
log(expressionMatter(6, 7, 1), 48);

log(expressionMatter(2, 10, 3), 60);
log(expressionMatter(1, 8, 3), 27);
log(expressionMatter(9, 7, 2), 126);
log(expressionMatter(1, 1, 10), 20);
log(expressionMatter(9, 1, 1), 18);
log(expressionMatter(10, 5, 6), 300);
log(expressionMatter(1, 10, 1), 12);

log('tests ok.');