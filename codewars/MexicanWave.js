const log = console.log;
const assert = require('assert');

function wave(str) {

  if (!str.length)
    return [];

  const result = [];
  const arr = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (![' ', ','].includes(arr[i])) {
      arr[i] = arr[i].toUpperCase();
      result.push(arr.join(''));
      arr[i] = arr[i].toLowerCase();
    }
  }
  return result;
}

result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];

log(wave("hello, me"), result);