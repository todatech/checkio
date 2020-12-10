const log = console.log;
const assert = require('assert');

function combinations(arr, n) {
  const fn = function (active, rest, a) {
    if (!active.length && !rest.length) return;
    if (!rest.length) {
      if (active.length === n) {
        a.push(active);
      }
    } else {
      fn(active.concat(rest[0]), rest.slice(1), a);
      fn(active, rest.slice(1), a);
    }
    return a;
  }
  return fn([], arr, [])
}

function chooseBestSum(t, k, ls) {
  let arr = ls.slice();
  if (ls.length < k)
    return null;
  const combos = combinations(arr, k);
  log(combos);
  const c = combos.map(a => a.reduce((acc, val) => acc + val))
    .sort((a, b) => b - a)
    .filter(v => v <= t);
  return c[0] || null;
}

// var ts = [50, 55, 56, 57, 58]
// log(chooseBestSum(163, 3, ts), 163)
// ts = [50]
// log(chooseBestSum(163, 3, ts), null)
// ts = [91, 74, 73, 85, 73, 81, 87]
// log(chooseBestSum(230, 3, ts), 228)


var ts = [ 91, 74, 73, 85, 73, 81, 87 ];
log(chooseBestSum(331, 5, ts), 163)
