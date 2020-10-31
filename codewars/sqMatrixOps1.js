// from https://www.codewars.com/kata/56dbeec613c2f63be4000be6

const assert = require('assert');
const log = console.log;

function checkSymetry(s) {
  return (Array.isArray(s) && s.length) ? ((s[0].length === s.length) ? n = s.length : undefined) : undefined;
}

function diag1Sym(strng) {

  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[j][i]))
    .map(row => row.join(''))
    .join('\n')
}

function rot90Clock(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[n - j - 1][i]))
    .map(row => row.join(''))
    .join('\n')
}

function selfieAndDiag1(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  let n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.join('') + '|' + row.map((_val, j) => matrix[j][i]).join(''))
    .join('\n');
}

function oper(fnc, s) {
  return fnc.call(this, s);
}

s = "abcd\nefgh\nijkl\nmnop";
// log(s);

// log(diag1Sym(s));
// log(rot90Clock(s));
// log(selfieAndDiag1(s));


s = "abcd\nefgh\nijkl\nmnop"


if (true) {
  assert.equal(diag1Sym(s), "aeim\nbfjn\ncgko\ndhlp");
  assert.equal(rot90Clock(s), "miea\nnjfb\nokgc\nplhd");
  assert.equal(selfieAndDiag1(s), "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp");
  assert.equal(oper(diag1Sym, s), "aeim\nbfjn\ncgko\ndhlp");
  assert.equal(oper(rot90Clock, s), "miea\nnjfb\nokgc\nplhd");
  assert.equal(oper(selfieAndDiag1, s), "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp");
  log('test ok');
}