const log = console.log;
const asser = require('assert');

// Helper Functions
function permute(nums) {
  let result = [];
  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    const remainingNumsPermuted = permute(remainingNums);
    for (let j = 0; j < remainingNumsPermuted.length; j++) {
      const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
      result.push(permutedArray);
    }
  }
  return result;
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

// Functions related with Generating Hints
// refer to the indexing scheme from kata
function getHintByIdx(matrix, idx) {
  const side = Math.floor(idx / 6);
  const pos = idx % 6;

  let x, y, current, count = 0;
  for (let i = 0; i < 6; i++) {
    switch (side) {
      case 0:
        x = i; y = pos;
        break;
      case 1:
        x = pos; y = 5 - i;
        break;
      case 2:
        x = 5 - i; y = 5 - pos;
        break;
      case 3:
        x = 5 - pos; y = i;
        break;
    }

    if ((!current) || (current < matrix[x][y])) {
      current = matrix[x][y];
      count++;
    }
  }
  return count;
}

function getHintsFromMatrix(matrix) {
  const hints = [];
  for (let i = 0; i < 24; i++) {
    hints.push(getHintByIdx(matrix, i))
  }
  return hints;
}

// Getting Hint Pairs by giving row/col number and hints list
const getHHintPair = (h, row) => [h[18 + (5 - row)], h[6 + row]];
const getVHintPair = (h, col) => [h[col], h[12 + (5 - col)]];

// Get all Pairs Horizontally
function getHintPairs(h, func) {
  let p = [];
  for (let i = 0; i < 6; i++) {
    p.push(func(h, i));
  }
  return p;
}

const getHPairsList = h => getHintPairs(h, getHHintPair);
const getVPairsList = h => getHintPairs(h, getVHintPair);


//direction should be true=forward array or false=reverse array
function getLineHint(arr, direction = true) {
  let dir = direction ? 1 : -1;
  let i = (dir > 0) ? 0 : arr.length - 1;
  let stop = (dir > 0) ? arr.length : -1;
  let current, count = 0;
  for (; i != stop; i += dir) {
    if ((!current) || (current < arr[i])) {
      current = arr[i];
      count++;
    }
  }
  return count;
}

const getLineHintL = arr => getLineHint(arr);
const getLineHintR = arr => getLineHint(arr, false);

//remap the List to extract only rowID based on a given set of hints.
function getIdxFromList(list) {

  return list.map(v => {
    const arr = [];
    const fList = v.filtered;
    fList.forEach(elem => {
      arr.push(elem.idx)
    })
    return arr;
  });
}

// check if matrix is valid by checking if  hori/vert contains only once of [1,2,3,4]
function checkValidMatrix(mat) {
  for (let i = 0; i < mat.length; i++) {
    // for horizontal check
    for (let k = 1; k <= mat.length; k++) {
      if (!mat[i].includes(k)) {
        return false;
      }
    }

    // for vertical check
    let line = [];
    for (let j = 0; j < mat.length; j++) {
      line.push(mat[j][i]);
    }
    for (let k = 1; k <= mat.length; k++) {
      if (!line.includes(k)) {
        return false;
      }
    }
  }
  return true;
}



function solvePuzzle(clues) {


  // let hints = getHintsFromMatrix(expected)
  // log('checks: ', arraysEqual(clues, hints));

  const combos = permute([1, 2, 3, 4, 5, 6]);
  const combosWHints = combos.map((val, idx) => {
    return {
      lhint: getLineHintL(val),
      rhint: getLineHintR(val),
      idx,
      val,
    }
  })

  log('combos w/ hints: ', combosWHints);

  const hPairs = getHPairsList(clues);
  const vPairs = getVPairsList(clues);
  log('H Pairs: \n', hPairs);
  log('V Pairs: \n', vPairs);


  const getPossibleRowsByHints = pairs => pairs.map(pair => {
    const filtered = combosWHints.filter(v => v.lhint === pair[0] && v.rhint === pair[1]);

    return {
      pair,
      filtered
    }
  });
  const hList = getPossibleRowsByHints(hPairs);
  const vList = getPossibleRowsByHints(vPairs);
  // log('hList: ', hList);
  // log('vList: ', vList);

  const hIdx = getIdxFromList(hList);
  const vIdx = getIdxFromList(vList);
  // log('hIdx: ', hIdx);
  // log('vIdx: ', vIdx)

  // log('valid? ', checkValidMatrix(expected));


  function constructAndTestMatrix() {

    log('H IDX: ')
    hIdx.forEach((row,i) => log(`id:${i}, len:${row.length}`))
    log('V IDX: ')
    vIdx.forEach((row,i) => log(`id:${i}, len:${row.length}`))

    // let possibleCombo = [];
    // for (let i = 0; i < hIdx[0].length; i++) {
    //   for (let j = 0; j < hIdx[1].length; j++) {
    //     for (let k = 0; k < hIdx[2].length; k++) {
    //       for (let l = 0; l < hIdx[3].length; l++) {
    //         for (let m = 0; m < hIdx[4].length; m++) {
    //           for (let n = 0; n < hIdx[5].length; n++) {
    //             possibleCombo.push([
    //               hIdx[0][i], hIdx[1][j], hIdx[2][k], hIdx[3][l], hIdx[4][m], hIdx[5][n],
    //             ]);
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    // log('possible combos:\n', possibleCombo);
    // log('length: ', possibleCombo.length);

    // let final = [];
    // let error = new Error('found!')
    // try {
    //   possibleCombo.forEach(combo => {
    //     let myMat = [
    //       combos[combo[0]], combos[combo[1]], combos[combo[2]],
    //       combos[combo[3]], combos[combo[4]], combos[combo[5]],
    //     ];
    //     if (checkValidMatrix(myMat)) {
    //       const newHints = getHintsFromMatrix(myMat);
    //       if (arraysEqual(newHints, origHints)) {
    //         final.push(combo);
    //         log('\nfound ids:', combo);
    //         log('matrix: ');
    //         myMat.forEach(row => log(row));
    //         throw error;
    //       }
    //     }
    //   })
    // } catch (e) {
    //   if (!(e instanceof Error)) {
    //     throw e;
    //   }
    // }
    // log('final: ', final);
  }
  constructAndTestMatrix();

  // return a;
}


function assert(expected, actual) {
  asser.equal(actual.length, 6);
  for (var i = 0; i < 6; i++) {
    asser.equal(actual[i].toString(), expected[i].toString());
  }
}
var clues = [3, 2, 2, 3, 2, 1,
  1, 2, 3, 3, 2, 2,
  5, 1, 2, 2, 4, 3,
  3, 2, 1, 2, 2, 4];

var expected = [
  [2, 1, 4, 3, 5, 6],
  [1, 6, 3, 2, 4, 5],
  [4, 3, 6, 5, 1, 2],
  [6, 5, 2, 1, 3, 4],
  [5, 4, 1, 6, 2, 3],
  [3, 2, 5, 4, 6, 1]];
var actual = solvePuzzle(clues);
// assert(expected, actual);

// var clues2 = [0, 0, 0, 2, 2, 0,
//   0, 0, 0, 6, 3, 0,
//   0, 4, 0, 0, 0, 0,
//   4, 4, 0, 3, 0, 0];

// var expected2 = [[5, 6, 1, 4, 3, 2],
// [4, 1, 3, 2, 6, 5],
// [2, 3, 6, 1, 5, 4],
// [6, 5, 4, 3, 2, 1],
// [1, 2, 5, 6, 4, 3],
// [3, 4, 2, 5, 1, 6]];
// var actual2 = solvePuzzle(clues2);
// assert(expected2, actual2);

// var clues3 = [0, 3, 0, 5, 3, 4,
//   0, 0, 0, 0, 0, 1,
//   0, 3, 0, 3, 2, 3,
//   3, 2, 0, 3, 1, 0];

// var expected3 = [[5, 2, 6, 1, 4, 3],
// [6, 4, 3, 2, 5, 1],
// [3, 1, 5, 4, 6, 2],
// [2, 6, 1, 5, 3, 4],
// [4, 3, 2, 6, 1, 5],
// [1, 5, 4, 3, 2, 6]];
// var actual3 = solvePuzzle(clues3);
// assert(expected3, actual3);
log('test ok...');
