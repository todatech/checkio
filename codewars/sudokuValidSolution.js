const log = console.log;
const assert = require('assert');

const re = new RegExp(/(?!.*([1-9]).*\1)^[1-9]{9}$/);

const corners = [
  [0, 0], [0, 3], [0, 6],
  [3, 0], [3, 3], [3, 6],
  [6, 0], [6, 3], [6, 6]
];

const getVLine = (board, n) => board.reduce((k, v) => {
  k.push(v[n]);
  return k;
}, []);

const getHLine = (board, n) => board[n];

function get3by3(board, m, n) {
  const arr = [];
  for (let i = m; i < m + 3; i++) {
    for (let j = n; j < n + 3; j++) {
      arr.push(board[i][j]);
    }
  }
  return arr;
}

function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    [r, c] = corners[i];
    if (!(
      re.test(getHLine(board, i).join('')) &
      re.test(getVLine(board, i).join('')) &
      re.test(get3by3(board, r, c).join(''))))
      return false;
  }
  return true;
}

log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 0, 3, 4, 8],
[1, 0, 0, 3, 4, 2, 5, 6, 0],
[8, 5, 9, 7, 6, 1, 0, 2, 0],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 0, 1, 5, 3, 7, 2, 1, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);