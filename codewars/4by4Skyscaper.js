const log = console.log;
const assert = require('assert');

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
  const side = Math.floor(idx / 4);
  const pos = idx % 4;

  let x, y, current, count = 0;
  for (let i = 0; i < 4; i++) {
    switch (side) {
      case 0:
        x = i; y = pos;
        break;
      case 1:
        x = pos; y = 3 - i;
        break;
      case 2:
        x = 3 - i; y = 3 - pos;
        break;
      case 3:
        x = 3 - pos; y = i;
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
  for (let i = 0; i < 16; i++) {
    hints.push(getHintByIdx(matrix, i))
  }
  return hints;
}

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


//get all permutation of 1,2,3,4 and calculate left-side hint and right-side hint
const combos = permute([1, 2, 3, 4]);
// log('combos:\n');
// combos.forEach((v, i) => log(`id:${i} - ${v}`))

const combosWHints = combos.map((val, idx) => {
  return {
    lhint: getLineHintL(val),
    rhint: getLineHintR(val),
    idx,
    val,
  }
});
log(combosWHints);

// const combosWHintsSortedL = combosWHints.slice().sort((a, b) =>
//   (a.lhint == b.lhint) ? (b.rhint - a.rhint) : (b.lhint - a.lhint));

// log(combosWHintsSortedL);


// Give the final matrix and reverse generating solution
const origMat = [
  [2, 4, 1, 3],
  [3, 1, 4, 2],
  [1, 3, 2, 4],
  [4, 2, 3, 1],

  // set 1
  // [1, 4, 2, 3],
  // [3, 2, 4, 1],
  // [2, 1, 3, 4],
  // [4, 3, 1, 2],

  // set 0 
  // [2, 3, 1, 4],
  // [3, 2, 4, 1],
  // [1, 4, 2, 3],
  // [4, 1, 3, 2]
];
log('target matrix: ', origMat);

// Hints will be given for every question.
const origHints = getHintsFromMatrix(origMat);
log('hints of a: ', origHints);


// Getting Hint Pairs by giving row/col number and hints list
const getHHintPair = (h, row) => [h[12 + (3 - row)], h[4 + row]];
const getVHintPair = (h, col) => [h[col], h[8 + (3 - col)]];

// Get all Pairs Horizontally
function getHintPairs(h, func) {
  let p = [];
  for (let i = 0; i < 4; i++) {
    p.push(func(h, i));
  }
  return p;
}

const getHPairsList = h => getHintPairs(h, getHHintPair);
const getVPairsList = h => getHintPairs(h, getVHintPair);


const hPairs = getHPairsList(origHints);
const vPairs = getVPairsList(origHints);
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
log('hList: ', hList);
log('vList: ', vList);


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
const hIdx = getIdxFromList(hList);
const vIdx = getIdxFromList(vList);
log('hIdx: ', hIdx);
log('vIdx: ', vIdx);


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
// log('check orig matrix? ', checkValidMatrix(origMat));

function constructAndTestMatrix() {

  let possibleCombo = [];
  for (let i = 0; i < hIdx[0].length; i++) {
    for (let j = 0; j < hIdx[1].length; j++) {
      for (let k = 0; k < hIdx[2].length; k++) {
        for (let l = 0; l < hIdx[3].length; l++) {
          possibleCombo.push([
            hIdx[0][i], hIdx[1][j], hIdx[2][k], hIdx[3][l],
          ]);
        }
      }
    }
  }
  // log('possible combos:\n', possibleCombo);

  let final = [];
  let error = new Error('found!')
  try {
    possibleCombo.forEach(combo => {
      let myMat = [
        combos[combo[0]], combos[combo[1]], combos[combo[2]], combos[combo[3]],
      ];
      if (checkValidMatrix(myMat)) {
        const newHints = getHintsFromMatrix(myMat);
        if (arraysEqual(newHints, origHints)) {
          final.push(combo);
          log('\nfound ids:', combo);
          log('matrix: ');
          myMat.forEach(row => log(row));
          throw error;
        }
      }
    })
  } catch (e) {
    if (!(e instanceof Error)) {
      throw e;
    }
  }
  log('final: ', final);
}
constructAndTestMatrix();