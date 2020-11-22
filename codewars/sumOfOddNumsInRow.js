const log = console.log;
const assert = require('assert');

function* oddGeneator() {
  for (let i = 1; ; i += 2) yield i;
}

function rowSumOddNumbers(n) {

  const getOdd = oddGeneator()

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      let val = getOdd.next().value;
      if (i === n) { answer += val; }
    }
  }
  return answer;

}

log(rowSumOddNumbers(1), 1);
log(rowSumOddNumbers(2), 8);
log(rowSumOddNumbers(3), 27);
log(rowSumOddNumbers(42), 74088); 