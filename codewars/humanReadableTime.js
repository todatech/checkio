const log = console.log;
const assert = require('assert');

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function humanReadable(seconds) {

  const modSec = seconds % 60;
  const mins = Math.floor(seconds / 60);
  const modMins = mins % 60;
  const hours = Math.floor(mins / 60);

  return `${pad(hours, 2)}:${pad(modMins, 2)}:${pad(modSec, 2)}`;
}


log(humanReadable(0), '00:00:00', 'humanReadable(0)');
log(humanReadable(5), '00:00:05', 'humanReadable(5)');
log(humanReadable(60), '00:01:00', 'humanReadable(60)');
log(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
log(humanReadable(359999), '99:59:59', 'humanReadable(359999)'); ``