const log = console.log


// function replaceUndefinedWithStars(str) {
//     let arr = str.split(',')
//     log('arr: ', arr);
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === '') { arr[i] = '*'; }
//     }
//     return arr.join('');
//   }


// //let arr = [1, , 1, 1, , 1, 1];
// let str = '1,1,1,2,,,,'
// log(replaceUndefinedWithStars(str));


// let arr = [
//   0, 1, 1, 2, 1,
//   1, 0, 1, 1, 2,
//   2
// ];

// let start = '>';
// RFLFFLFRFFRFLFFLFF


// let start = '^';
// let arr = [
//   2, 1, 1, 0, 0, 0, 3, 3,
//   3, 3, 2, 2, 2, 2, 2, 1,
//   1, 1, 1, 1, 1, 0, 0, 0,
//   0, 0, 0
// ];
// FRFFRFFFRFFFFRFFFFFRFFFFFFRFFFFFF

// 0 - down
// 1 - right
// 2 - up
// 3 - left

// F - forward one step
// L - turn left
// R - turn right
// B - turn back

// function getInstruction(start, arr) {

//   let currentBearing = bearings.findIndex(val => val === start);
//   let instruction = arr.reduce((acc, val) => {
//     acc.push(instructLookup[val][currentBearing]);
//     currentBearing = val;
//     return acc;
//   }, []);

//   log(instruction.join(''));

//   return '';
// }


// log(getInstruction(start, arr));

// let arr = [ 0, 1,2,3,4,-2,6,7,8,9];

// min = Math.min(...arr);
// log('min: ', min);
// log('ans: ', arr.findIndex(v => v === min));


// function addArrayABreduce(a, b) {
//   return a.reduce((wacc, v) => {
//     b.forEach(w => {
//       const result = w.reduce((acc, e, i) => {
//         acc.push(v[i] + e);
//         return acc;
//       }, [])
//       wacc.push(result);
//     })
//     return wacc;
//   }, [])
// }

// function addArrayAB(a, b) {
//   const final = [];
//   a.forEach(u => {
//     b.forEach(w => {
//       const result = [];
//       for (let i = 0; i < u.length; i++) {
//         result.push(u[i] + w[i]);
//       }
//       final.push(result);
//     })
//   })
//   return final;
// }

// // let a = [[0, 1, 2]];
// // let b = [[1, 2, 3]];


// // let a = [[0, 1, 2], [3, 4, 5]];
// let a = [[]];
// let b = [[1, 2, 3], [4, 5, 6]];

// log(addArrayAB(a, b));

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

String.prototype.getCustomNumObj = function () {

  const ArrayTrueZero = ['.', 0];

  // prep array
  const arr = this.slice().split('').map(v => {
    let a = parseInt(v, 10);
    return (isNaN(a) ? v : a);
  }).reverse();

  // insert decimal pt if it has none, and find out how many decimal places.
  let a;
  let dec;
  if ((a = arr.findIndex(v => v === '.')) === -1) {
    arr.unshift('.');
    dec = 0;
  } else {
    dec = a;
  }

  // find if it's a negative number
  let neg = ((a = arr.findIndex(v => v === '-')) === -1) ? false : true;
  if (neg) arr.splice(a, 1);

  // trim trailing zeros
  for (let i = 0; i < dec; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      dec--;
      i--;
    } else {
      break;
    }
  }

  // trim leading zeros
  let pt = arr.findIndex(v => v === '.') + 1;
  for (let i = arr.length - 1; i > pt; i--) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    } else {
      break;
    }
  }

  // determine if it's true zero
  let zero = false;
  if (arraysEqual(ArrayTrueZero, arr)) { zero = true; neg = false; };

  return {
    zero: zero,
    negative: neg,
    decimal: dec,
    array: arr,
    toString() {
      if (this.zero) { return '0' };
      let neg = (this.negative) ? '-' : '';
      let temp = this.array.reverse();
      if (temp[temp.length - 1] === '.') { temp.pop() };
      return neg.concat(temp.join(''));
    },
  };
}

// log("-0.00".getCustomNumObj());
// log("0.000".getCustomNumObj());
// log("-0.01000".getCustomNumObj());       // how to check leading zero no dec after
// log("00002.01000".getCustomNumObj());
// log("-00003.000001000".getCustomNumObj());
// log("3.00000".getCustomNumObj());
// log("002".getCustomNumObj());
// log("-5.0908".getCustomNumObj());
// log("-123.1".getCustomNumObj());

log("-0.00".getCustomNumObj().toString());
log("0.000".getCustomNumObj().toString());
log("-0.01000".getCustomNumObj().toString());       // how to check leading zero no dec after
log("00002.01000".getCustomNumObj().toString());
log("-00003.000001000".getCustomNumObj().toString());
log("3.00000".getCustomNumObj().toString());
log("002".getCustomNumObj().toString());
log("-5.0908".getCustomNumObj().toString());
log("-123.1".getCustomNumObj().toString());

if (false) {

}
