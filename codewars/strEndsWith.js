const log = console.log;
const assert = require('assert');

const solution = (str, ending) => {
  const a = str.lastIndexOf(ending);
  return (!!~a && a === str.length - ending.length)
}

if (true) {
  log(solution('abcde', 'cde'), true)
  log(solution('abcde', 'abc'), false)
  log(solution('abc', 'abcd'), false)
  log(solution('ails', 'fails'), false)
  log(solution('this', 'fails'), false)
}