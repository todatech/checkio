const assert = require('assert');
const log = console.log;

let map = [];
function buildMap(n) {
  map = Array(n).fill(true);
  const limit = Math.sqrt(n);

  //Remove multiples of primes
  for (let i = 2; i <= limit; i++) {
    if (map[i]) {
      for (let j = i * i; j < n; j += i) {
        map[j] = false;
      }
    }
  }
}

function gap(g, m, n) {
  buildMap(Math.max(m,n));
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (map[i]) {
      arr.push(i);
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) === g) {
      return [arr[i - 1], arr[i]];
    }
  }
  return null;
}

log(gap(2, 100, 110), [101, 103]);
log(gap(4, 100, 110), [103, 107]);
log(gap(6, 100, 110), null);
log(gap(8, 300, 400), [359, 367]);
log(gap(10, 300, 400), [337, 347]);