const log = console.log;
const assert = require('assert');

function twoSort(s) {
  const str = s.sort()[0];
  return str.split('').join('***');
}

log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e'); 