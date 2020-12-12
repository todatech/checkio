const log = console.log;
const assert = require('assert');

function sumPairs(ints, s) {
  let results = [];
  let obj = ints.reduce((k, v, i) => {
    let key = s - v
    k[key] ? k[key].i.push(i) : k[key] = {v, i: [i]};
    if (k[v] !== undefined)
      result.push([{ v, i },k[v]]);
    return k;
  }, {});
  log(obj);
  log(JSON.stringify(results, null, 2));

  let final = results.map(res => {
    let leftIndex = res[0].i;
    let obj = Object.assign({}, res[1]);
    let newObj ={}
    newObj.v = obj.v;
    for (let i of obj.i) {
      
    }
    
  })
  



  // log(result);
  // let a, b, found = false;

  // for (let i = 0; i < ints.length; i++) {
  //   a = ints[i];
  //   b = obj[a];
  //   if (b !== undefined) {
  //     found = true;
  //     break;
  //   }
  // }
  // return found ? [a, b.v] : undefined;



  // const cacheSub = () => {
  //   let cache = {};
  //   return (a) => {
  //     if (a in cache) {
  //       return cache[a];
  //     }
  //     else {
  //       let result = s - a; // if a+b=s -> b = s-a
  //       cache[a] = result;
  //       return result;
  //     }
  //   }
  // }

  // const sub = cacheSub();
  // let a, b, found = false;
  // let diff = 0;

  // outer:
  // for (let i = 0; i < ints.length; i++) {
  //   if (diff < ints.length)
  //     diff++;
  //   for (let j = 0; j < ints.length; j++) {
  //     a = ints[j];
  //     b = ints[j + diff];
  //     if (b === undefined) break;
  //     if (a == sub(b)) {
  //       found = true;
  //       break outer;
  //     }
  //   }
  // }

  // return found ? [a, b] : undefined;
}


// log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
// log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
// log(sumPairs([20, -13, 40], -7), undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
// log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
// log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
// log(sumPairs([0, 2, 0], 0), [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
// log(sumPairs([5, 9, 13, -3], 10), [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");


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