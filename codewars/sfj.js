const log = console.log;
const assert = require('assert');

function SJF(jobs, index) {
  const obj = jobs.map((t, i) => ({
    i, t,
  })).sort((a, b) => a.t - b.t);

  let result = 0;
  for (const v of obj) {
    result += v.t;
    if (v.i === index)
      break;
  }
  return result;
}

log(SJF([100], 0), 100)
log(SJF([3, 10, 20, 1, 2], 0), 6)
log(SJF([3, 10, 20, 1, 2], 1), 16)