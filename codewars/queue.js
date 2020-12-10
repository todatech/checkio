function Queue() {
  this.queue = [];
  this.enqueue = elem => this.queue.push(elem);
  this.dequeue = () => this.queue.shift();
  this.size = () => this.queue.length;
}
