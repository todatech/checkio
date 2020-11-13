const assert = require('assert');
const log = console.log;

function mystery(num) {
  let bi = BigInt(num);
  return bi ^ (bi >> 1n);
}

function mysteryInv(num) {
  let bi = BigInt(num);
  let mask = BigInt(num);
  while (mask) {
    mask >>= 1n;
    bi ^= mask;
  }
  return bi;
}


log((mystery(6)))       //, 5, "mystery(6) ")
log(mysteryInv(5))    //, 6, "mysteryInv(5)")
log(mystery(9))       //, 13, "mystery(9) ")
log(mysteryInv(13))    //, 9, "mysteryInv(13)")
log(mystery(19))      //, 26, "mystery(19) ")
log(mysteryInv(26))   //, 19, "mysteryInv(26)")

// old code --> using array method...

  // T function calling recursively
  // function T(n, r = 0, arr = []) {
  //   if (n > r) {
  //     if (r == 0) {
  //       return T(n, r + 1, [0, 1]);
  //     } else {
  //       const arr1 = arr.map(val => '0' + val)
  //       const arr2 = [...arr].reverse().map(val => '1' + val)
  //       const result = arr1.concat(arr2)
  //       return T(n, r + 1, result);
  //     }
  //   }
  //   else {
  //     return arr;
  //   }
  // }

  // T function in loop
  function T(n) {

    arr = [0, 1];
  
    for (let r = 1; r < n; r++) {
  
      const x = 2 ** (r);
      const len = arr.length - 1;
      const arr2 = [];
      for (let i = len; i >= 0; i--) {
        arr2.push(arr[i] + x);
      }
      for (let i = 0; i <= len; i++) {
        arr.push(arr2[i]);
      }
    }
    return arr;
  }

  let arr = []

function getLog2(x) {
  return Math.log(x) / Math.log(2);
}

function mystery2(num) {
  const tnum = Math.floor(getLog2(num)) + 1;
  // return parseInt(T(tnum)[num], 2);
  return (T(tnum)[num]);
}

function mysteryInv2(num) {
  const tnum = Math.floor(getLog2(num)) + 1;
    let arr = T(tnum)
    let idx =  arr.findIndex(val => (val) === num)
    if (~idx) {
      return idx;
    }
}