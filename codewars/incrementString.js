const log = console.log;
const assert = require('assert');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function incrementString(strng) {
  const re = new RegExp(/([A-Za-z]*)+([\d]*)*/);
  const mat = strng.match(re) || [];

  let numStr = '';
  if (mat[2] !== undefined) {
    let l = mat[2].length;
    let num = parseInt(mat[2], 10) + 1;
    numStr = pad(num, l);
  } else {
    numStr = '1';
  }
  log('mat: ', mat);

  return ''.concat(mat[1] ? mat[1] : '', numStr);
}

if (true) {
  log(incrementString("foobar000"), "foobar001");
  log(incrementString("foo"), "foo1");
  log(incrementString("foobar001"), "foobar002");
  log(incrementString("foobar99"), "foobar100");
  log(incrementString("foobar099"), "foobar100");
  log(incrementString(""), "1");
  log(incrementString("1"), "2");
  log(incrementString("009"), "010");

}