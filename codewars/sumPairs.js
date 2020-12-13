const log = console.log;
const assert = require('assert');

function sumPairs(ints, s) {
  // since we want a + b = s, we first compute an obj with keys
  // s - v while we check if current value to see if it is what we need
  const results = [];
  const obj = ints.reduce((k, v, i) => {
    const key = s - v;
    k[key] ? k[key].i.push(i) : k[key] = { v, i: [i] };
    if (k[v] !== undefined)
      results.push([{ v, i }, k[v]]);
    return k;
  }, {});
  // log('obj: ', obj);
  // log(JSON.stringify(results, null, 2));

  if (!results.length)
    return undefined;

  // reformat and sort the result list and show answer
  const final = [];
  results.forEach(result => {
    const l = result[0], r = result[1];
    for (const i of r.i) {
      if (l.i !== i) {    // eliminate errors from previous step where left_id=right_id
        const min = Math.min(l.i, i);
        const diff = Math.abs(l.i - i);
        const arr = (i > l.i) ? [l.v, r.v, min, diff] : [r.v, l.v, min, diff];
        final.push(arr);
      }
    }
  });

  // we want smallest idx diff first, and then smallest idx
  final.sort((a, b) => a[3] == b[3] ? a[2] - b[2] : a[3] - b[3]);
  // log('final: ', final);
  return [final[0][0], final[0][1]];
}


log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
log(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
log(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
log(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");


// old code ---- 
// function sumPairs(ints, s) {

//   let found = false;
//   let a, b;
//   outer: for (let i = 0; i < ints.length; i++) {
//     a = ints[i];
//     for (let j = i + 1; j < ints.length; j++) {
//       b = ints[j];
//       if (a + b === s) {
//         found = true;
//         break outer;
//       }
//     }
//   }

//   return found ? [a, b] : undefined;
// }

// solution 2 -- not working because search should be linearly spaced not
// by elements
// function sumPairs(ints, s) {

//   let obj = ints.reduce((k, v, i) => {
//     k[s - v] = { i, v };
//     return k;
//   }, {});

//   let a, b, found = false;

//   for (let i = 0; i < ints.length; i++) {
//     a = ints[i];
//     b = obj[a];
//     if (b !== undefined) {
//       found = true;
//       break;
//     }
//   }
//   return found ? [a, b.v] : undefined;
// }