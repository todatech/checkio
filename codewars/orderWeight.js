const log = console.log;
const assert = require('assert');

const orderWeight = strng =>
  strng.trim()
    .split(' ')
    .map(v => ({ v, s: v.split('').reduce((k, v) => k + +v, 0) }))
    .sort((a, b) => {
      if (a.s == b.s)
        return (a.v < b.v) ? -1 : (a.v > b.v) ? 1 : 0;
      else
        return (a.s - b.s);
    })
    .map(v => v.v)
    .join(' ');

// log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "\n11 11 2000 10003 22 123 1234000 44444444 9999")
