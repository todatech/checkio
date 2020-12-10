const log = console.log;
const assert = require('assert');

function countSmileys(arr) {
  return arr.filter(v => {
    const eyes = [':', ';'].includes(v[0]);
    const nose = ['-', '~'].includes(v[1]);
    const n = nose ? 2 : 1;
    const mouth = [')', 'D'].includes(v[n]);
    return eyes && mouth;
  }).length;
}

log(countSmileys([]), 0);
log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);