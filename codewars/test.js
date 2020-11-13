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

let arr = [ 0, 1,2,3,4,-2,6,7,8,9];

min = Math.min(...arr);
log('min: ', min);
log('ans: ', arr.findIndex(v => v === min));