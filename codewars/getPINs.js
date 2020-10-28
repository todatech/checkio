const assert = require('assert');
const log = console.log;

let map = {
  1: '24',
  2: '135',
  3: '26',
  4: '157',
  5: '2468',
  6: '359',
  7: '48',
  8: '5790',
  9: '68',
  0: '8'
}

function getKeyCombo(key) {
  return (key + map[key]);
}

function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
};

function getPINs(observed) {

  let numKeyPressed = observed.length;
  if (!numKeyPressed) return '';

  // mapping possible adjacent keys for a single keypress.
  const arr = observed.split('').map(key => [...getKeyCombo(key).split('')]);
  // log(arr);

  // it is hard to get a deep nest with multiple level of function, 
  // finally decided to build an eval string to do something very similar below
  // log(arr1.map(function (a) {
  //   return arr2.map(function (b) {
  //     return arr3.map(function (c) {
  //       return a + b + c;
  //     })
  //   })
  // }))

  // making a shortcut for building an eval string.
  // log(fn(arr1, (a1) => fn(arr2, (a2) => fn(arr3, (a3) => a1 + a2 + a3))));
  function fn(arr, callback) { return arr.map(callback) }

  // building an eval string for multiple Array.prototype.map operation.
  let runCmd = '', returnVar = '';
  for (let i = 0; i < numKeyPressed; i++) {
    const varName = 'a' + i;
    const cmd = 'fn(arr[' + i + '], (' + varName + ') => ';
    returnVar += (i !== numKeyPressed - 1) ? varName + ' + ' : varName;
    runCmd += cmd;
    runCmd += (i === numKeyPressed - 1) ? returnVar + ')'.repeat(numKeyPressed) : '';
  }
  // log(runCmd);
  
  const result = eval(runCmd);
  return flatDeep(result, numKeyPressed);
}

log(getPINs("369"))



if (false) {
  assert.equal(getPINs("8"), ["5", "7", "8", "9", "0"]);
  assert.equal(getPINs("11"), ["11", "22", "44", "12", "21", "14", "41", "24", "42"]);
  assert.equal(getPINs("369"), ["339", "366", "399", "658", "636", "258", "268", "669", "668", "266", "369", "398", "256", "296", "259", "368", "638", "396", "238", "356", "659", "639", "666", "359", "336", "299", "338", "696", "269", "358", "656", "698", "699", "298", "236", "239"]);

}


// Test Codes -------------------
  // arr1 = ['a', 'b', 'c'];
  // arr2 = ['d', 'e', 'f'];
  // arr3 = ['g', 'h', 'i'];
  // log(arr1.map(a => arr2.map(b => arr3.map(c => a + b + c ))));



    // log(fn(arr1, (a1) => fn(arr2, (a2) => fn(arr3, (a3) => a1 + a2 + a3))));


