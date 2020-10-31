const assert = require('assert');
const log = console.log;

function checkSymetry(s) {
  return (Array.isArray(s) && s.length) ? ((s[0].length === s.length) ? n = s.length : undefined) : undefined;
}

function rot90Clock(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  const n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[n - j - 1][i]))
    .map(row => row.join(''))
    .join('\n')
}

function rot90Counter(strng) {
  const matrix = strng.split('\n').map(val => val.split(''));

  const n = checkSymetry(matrix);
  if (n === undefined) return [];

  return matrix.map((row, i) => row.map((_val, j) => matrix[j][n - i - 1]))
    .map(row => row.join(''))
    .join('\n')
}

function code(t) {
  if (!t.length) return '';
  const l = t.length;
  const n = Math.ceil(Math.sqrt(l));

  const myStr = t.concat(String.fromCharCode(11).repeat(n ** 2 - l))

  let result = []
  for (let i = 0; i < n; i++) {
    result.push(myStr.slice((n * i), (n * (i + 1))))
  }
  return rot90Clock(result.join('\n'))
}

function decode(t) {
  if (!t.length) return '';
  const reChar = new RegExp(String.fromCharCode(11), 'g');
  return rot90Counter(t).replace(/\n/g, '').replace(reChar, '');
}

let t = "I.was.going.fishing.that.morning.at.ten.o'clock"
// let m;
// m = code(t);
// log(decode(m));

if (true) {
  assert.equal(code(t), "c.nhsoI\nltiahi.\noentinw\ncng.nga\nk..mg.s\n\voao.f.\n\v'trtig");
  assert.equal(decode(code(t)), "I.was.going.fishing.that.morning.at.ten.o'clock");
  log('test ok...')
}