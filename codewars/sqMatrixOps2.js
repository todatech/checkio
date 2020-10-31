// from https://www.codewars.com/kata/56dbeec613c2f63be4000be6

const assert = require('assert');
const log = console.log;

function checkSymetry(s) {
  return (Array.isArray(s) && s.length) ? ((s[0].length === s.length) ? n = s.length : undefined) : undefined;
}

function diag2Sym(strng) {

  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[n - j - 1][n - i - 1]))
    .map(row => row.join(''))
    .join('\n')
}

function rot90Counter(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[j][n - i - 1]))
    .map(row => row.join(''))
    .join('\n')
}

function selfieDiag2Counterclock(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.join('') + '|' + row.map((_val, j) => matrix[n - j - 1][n - i - 1]).join('') + '|' + row.map((_val, j) => matrix[j][n-i-1]).join(''))
    .join('\n');
}

function oper(fnc, s) {
  return fnc.call(this, s);
}

s = "abcd\nefgh\nijkl\nmnop";
log(s);

// log(diag2Sym(s));
// log(rot90Counter(s));
// log(selfieDiag2Counterclock(s)); 

// r = "dhlp\ncgko\nbfjn\naeim";
// log(r);

if (true) {
  assert.equal(diag2Sym(s), "plhd\nokgc\nnjfb\nmiea");
  assert.equal(rot90Counter(s), "dhlp\ncgko\nbfjn\naeim");
  assert.equal(selfieDiag2Counterclock(s), "abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim");
  assert.equal(oper(diag2Sym, s), "plhd\nokgc\nnjfb\nmiea");
  assert.equal(oper(rot90Counter, s), "dhlp\ncgko\nbfjn\naeim");
  assert.equal(oper(selfieDiag2Counterclock, s), "abcd|plhd|dhlp\nefgh|okgc|cgko\nijkl|njfb|bfjn\nmnop|miea|aeim");
  log('test ok');
}