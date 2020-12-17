const log = console.log;
const assert = require('assert');


function solution(number) {

  let result = 0;
  for (let i = 1; i < number; i++)
    if (!(i % 3) || !(i % 5))
      result += i;
  return result;
}

log(solution(10), 23)
