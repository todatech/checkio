const assert = require('assert');
const log = console.log;

// function permutations(arr){
//   if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
//   return arr.reduce(
//     (acc, item, i) =>
//       acc.concat(
//         permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
//           item,
//           ...val,
//         ])
//       ),
//     []
//   );
// };

// function combinations(arr) {
//   const func = function (active, rest, a) {
//     if (!active && !rest) return;
//     if (!rest) { a.push(active); }
//     else {
//       func(active + rest[0], rest.slice(1), a);
//       func(active, rest.slice(1), a);
//     }
//     return a;
//   }
//   return func('', arr, []);
// }

function primeFactor(num) {
  if ((num) <= 0) { return [] };

  let p = 2;
  let result = [];

  while (num >= p ** 2) {
    if (num % p) { p++; }
    else {
      result.push(p);
      num /= p;
    }
  }
  result.push(num);
  return result;
}

function getDivisors(num) {

  pf = primeFactor(num);

  if (!pf.length) { return [] };

  // combine all the prime factors found into combinations
  // so we can find every divisors 
  const fn = function (n, src, got, all) {
    if (n == 0) {
      if (got.length > 0) {
        all[all.length] = got;
      }
      return;
    }
    for (let j = 0; j < src.length; j++) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all)
    }
    return;
  }

  const combo = [];
  for (let i = 0; i < pf.length; i++) {
    fn(i, pf, [], combo);
  }
  combo.push(pf);

  // reduce the combinations of prime facotrs into 
  // divisors of the input 'num'
  const divisors = [1];

  for (let div of combo) {
    const result = div.reduce((acc, val) => {
      acc *= val;
      return acc;
    }, 1)
    if (!divisors.includes(result)) {
      divisors.push(result);
    }
  }

  return divisors.sort((a, b) => a - b);
}

function getPerfectSquaredDivisors(num) {

  // old code that loop through all the number from 1 to num
  // to find divisors, this can be slow for larger numbers
  // let divisors = [];
  // for (let i = 1; i <= num; i++) {
  //   if (!(num % i)) {
  //     divisors.push(i);
  //   }
  // }

  // new code that get prime Factors and expand into divisors
  // it helps performance for larger numbers!
  const divisors = getDivisors(num);

  //get a the sum of all squared divisors 
  let result = divisors.reduce((acc, val) => {
    acc += val ** 2;
    return acc;
  }, 0)

  // we will return the if we find a perfect squared result
  let root = Math.floor(Math.sqrt(result))
  if (result == Math.floor(root ** 2)) {
    return [num, result];
  } else {
    return [];
  }
}

// go through all the number from m to n
function listSquared(m, n) {
  let result = []
  for (let i = m; i <= n; i++) {
    let div = getPerfectSquaredDivisors(i);
    if (div.length) {
      result.push(div);
    }
  }
  return result;
}

//log(primeFactor(42));
//log(getDivisors(42));
// log(primeFactor(450));
// log(getDivisors(450));
log(listSquared(1, 250))

if (false) {
  assert.equal(listSquared(42))
  log('test ok.');
}