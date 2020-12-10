const log = console.log;
const assert = require('assert');

// function combinations(arr, n) {
//   const fn = function (active, rest, a) {
//     if (!active.length && !rest.length) return;
//     if (!rest.length) {
//       if (active.length === n) {
//         a.push(active);
//       }
//     } else {
//       fn(active.concat(Array(rest[0])), rest.slice(1), a);
//       fn(active, rest.slice(1), a);
//     }
//     return a;
//   }
//   return fn([], arr, [])
// }
// let combos = triplets.map(arr => combinations(arr, 2));

const recoverSecret = function (triplets) {

  // turn triplets in to 3 pairs of 2;
  const combos = triplets.map(arr => [
    [arr[0], arr[1]],
    [arr[0], arr[2]],
    [arr[1], arr[2]],
  ]);

  // get unique pairs of (char_before, char_after)
  const combosFlatten = combos.reduce((acc, val) => acc.concat(val), []);
  const orders = new Set(combosFlatten);

  // get unique character sets
  const charset = new Set();
  for (const s of orders) {
    for (const v of s)
      charset.add(v);
  }

  function moveElement(array, from, to) {
    let tmp = array.splice(from, 1);
    array.splice(to, 0, ...tmp);
    return array;
  }

  // sort the character set by hints pairs
  function sortByHints(arr) {
    let done = true;    // run this function until there's no change
    for (const s of orders) {
      let a = arr.indexOf(s[0]);
      let b = arr.indexOf(s[1]);
      if (b < a) {
        done = false;
        moveElement(arr, b, a + 1);
      }
    }
    return done;
  }

  const result = Array.from(charset);
  while (!sortByHints(result));
  return result.join('');
}



secret1 = "whatisup"
triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
]

log(recoverSecret(triplets1), secret1)