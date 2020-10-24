const assert = require('assert');
const log = console.log;

// function towerBuilder(nFloors) {

function towerBuilder(nFloors) {

  if (!nFloors) return [''];

  const lines = [];
  const charsInLine = nFloors * 2 - 1;

  for (let i = 0; i < nFloors; i++) {
    let output = '';
    const start = Math.floor(charsInLine / 2) - i;
    const end = start + 2 * i;
    for (let j = 0; j < charsInLine; j++) {
      output += (j >= start && j <= end)? '*': ' ';
    }
    lines.push(output);
  }
  return lines;
}

log(towerBuilder(1));
log(towerBuilder(3));
log(towerBuilder(6));

if (false) {
  log('test ok');
}