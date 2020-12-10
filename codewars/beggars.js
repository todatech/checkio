const log = console.log;
const assert = require('assert');

function Queue() {
  this.queue = [];
  this.enqueue = elem => this.queue.push(elem);
  this.dequeue = () => this.shift();
  this.peek = () => this.queue[0];
  this.sum = () => this.queue.reduce((k, v) => k + v, 0);
}

function* genQueueSeq(n) {
  let i = -1;
  while (true) {
    (i < n - 1) ? i++ : i = 0;
    yield i;
  }
}

function beggars(values, n) {

  if (!n) return [];

  let qid = genQueueSeq(n);

  const queues = new Array();
  for (let i = 0; i < n; i++)
    queues.push(new Queue());

  values.forEach(v => queues[qid.next().value].enqueue(v));
  return queues.map(q => q.sum())
}

log(beggars([1, 2, 3, 4, 5], 1), [15]);
log(beggars([1, 2, 3, 4, 5], 2), [9, 6]);
log(beggars([1, 2, 3, 4, 5], 3), [5, 7, 3]);
log(beggars([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 0]);
log(beggars([1, 2, 3, 4, 5], 0), []);