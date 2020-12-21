const log = console.log;
const assert = require('assert');

function race(v1, v2, g) {
  if (v1 >= v2)
    return null;

  const seconds = g / (v2 - v1) * 3600;
  const modSec = Math.floor(seconds % 60);
  const mins = Math.floor(seconds / 60);
  const modMins = mins % 60;
  const hours = Math.floor(mins / 60);

  return [hours, modMins, modSec];
}

log(race(720, 850, 70), [0, 32, 18])
log(race(80, 91, 37), [3, 21, 49])
log(race(80, 100, 40), [2, 0, 0])