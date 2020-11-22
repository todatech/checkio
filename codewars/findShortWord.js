const { workerData } = require("worker_threads");

const log = console.log;

const findShort = s => s.split(' ').reduce((k, v) => k = (k > v.length) ? v.length : k, 1000);

// function findShort(s) {
  // let count;
// s.split(' ').forEach(word => {
//     if (!count || (count > word.length)) {
//         count = word.length;
//     }
// })
// return count;
// }

log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
