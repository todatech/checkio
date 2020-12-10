const log = console.log;
const assert = require('assert');

// function stray(numbers) {

//   const obj = {};
//   for (const v of numbers) {
//     obj[v] ? obj[v] += 1 : obj[v] = 1;
//     if (Object.keys(obj).length === 2) {
//       const vals = Object.values(obj).sort((a, b) => a - b);
//       if (vals[0] == 1 && vals[1] > 1) {
//         for (const [key, val] of Object.entries(obj)) {
//           if (val == 1)
//             return key;
//         }
//       }
//     }
//   }
// }

function stray(numbers) {
  let a, b, a_count, b_count;
  for (let c of numbers) {
    if (a === undefined) {
      a = c; a_count = 1;
    } else if (a === c) {
      a_count++;
    } else if ((a !== c) && (b === undefined)) {
      b = c; b_count = 1;
    } else if (b === c) {
      b_count++;
    }

    if (a_count > 1 && b_count == 1) return b;
    if (a_count == 1 && b_count > 1) return a;
  }
}

log(stray([1, 1, 2]), 2);
log(stray([17, 17, 3, 17, 17, 17, 17]), 3);

