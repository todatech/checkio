const log = console.log;
const assert = require('assert');

const reverseWords = (str) => str.split(' ').map(v => v.split('').reverse().join('')).join(' ');

// log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');

if (true) {
  assert.equal(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
  assert.equal(reverseWords('apple'), 'elppa');
  assert.equal(reverseWords('a b c d'), 'a b c d');
  assert.equal(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  log('test ok...');
}