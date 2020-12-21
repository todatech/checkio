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
buildMap(12000000);

function step(g, m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (map[i]) {
      arr.push(i);
    }
  }
  if (!arr.length)
    return null;

  for (let i = 0; i< arr.length; i++){
    const v = arr[i];    
      if (map[v+g]) {
        return [v, v+g];
      }
  }
  return null;
}

log(step(2, 2, 50), [3, 5]);
log(step(2, 5, 5), null);
log(step(4, 130, 200), [163, 167]);
log(step(6, 100, 110), [101, 107]);

log(step(2, 100, 110), [101, 103])
log(step(4, 100, 110), [103, 107])
log(step(6, 100, 110), [101, 107])
log(step(8, 300, 400), [359, 367])
log(step(10, 300, 400), [307, 317])
log(step(2, 100, 103), [101,103])