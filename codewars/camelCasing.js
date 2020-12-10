const log = console.log;
const assert = require('assert');

function solution(string) {
  const arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i];
    if (c == c.toUpperCase()) {
      arr.splice(i, 0, ' ');
      i++;
    }
  }
  return arr.join('');
}

log(solution('camelCasing'), 'camel Casing', 'Unexpected result')
log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')