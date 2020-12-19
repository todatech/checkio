const log = console.log;
const assert = require('assert');
const { workerData } = require('worker_threads');

var capitals = word => word.split('')
  .map((v, i) => ({ v, i }))
  .filter(e => e.v === e.v.toUpperCase())
  .map(v => v.i);

log(capitals('CodEWaRs'), [0, 3, 4, 6]);