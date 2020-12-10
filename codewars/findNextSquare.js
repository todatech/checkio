const log = console.log;
const assert = require('assert');

function findNextSquare(sq) {
  const a = Math.sqrt(sq);
  return (Math.floor(a) === a) ? Math.pow(a + 1, 2) : -1;
}

log(findNextSquare(121), 144, "Wrong output for 121");
log(findNextSquare(625), 676, "Wrong output for 625");
log(findNextSquare(319225), 320356, "Wrong output for 319225");
log(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");

log(findNextSquare(155), -1, "Wrong output for 155");
log(findNextSquare(342786627), -1, "Wrong output for 342786627");