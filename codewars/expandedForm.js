const log = console.log;
const assert = require('assert');

const expandedForm = num => num.toString()
  .split('')
  .reverse()
  .map((v, i) => (v !== '0') ? v.concat('0'.repeat(i)) : undefined)
  .filter(v => v !== undefined)
  .reverse()
  .join(' + ');

if (true) {
  log(expandedForm(12), '10 + 2');
  log(expandedForm(42), '40 + 2');
  log(expandedForm(70304), '70000 + 300 + 4');
}