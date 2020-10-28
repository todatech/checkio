const assert = require('assert');
const log = console.log;

class Cursor {
  constructor(top, left, bottom, right) {
    this.x= 0;
    this.y= 0;

    this.top= top;
    this.left= left;
    this.bottom =bottom;
    this.right= right;
  }

  // will use directional keys to control where 'snail' is going
  // by using (wasd) function name as up/left/down/right 
  d() {
    return (this.x < this.right) ? (this.x += 1) : undefined;
  }
  s() {
    return (this.y < this.bottom) ? (this.y += 1) : undefined;
  }
  a() {
    return (this.x > this.left) ? (this.x -= 1) : undefined;
  }
  w() {
    return (this.y > this.top) ? (this.y -= 1) : undefined;
  }

  set setTopLimit(limit) { this.top = limit; }
  increaseTopLimit() { this.top += 1; }

  set setLeftLimit(limit) { this.left = limit; }
  increaseLeftLimit() { this.left += 1; }

  set setBottomLimit(limit) { this.bottom = limit; }
  decreaseBottomLimit() { this.bottom -= 1; }

  set setRightLimit(limit) { this.right = limit; }
  decreaseRightLimit() { this.right -= 1; }

  get getCoord() { return [this.x, this.y] }
  get getX() { return this.x }
  get getY() { return this.y }
}

function snail(arr) {
  
  // check for empty array
  if (!arr[0].length) return [];
  
  // check for 1-element array
  if (arr[0].length === 1) return arr[0];
  
  // check for non-symmetric array
  let nElem = arr[0].length;
  if (arr.length !== nElem) return [[]];
  
  // set up a instance of Cursor();  
  let cursor = new Cursor(0, 0, nElem-1, nElem-1);

  // this function is for pushing current path to the result array
  const result = [];
  let count = 0;
  const p = () => {
    result.push(arr[cursor.getY][cursor.getX]);
    count++;
  }

  // this function return results when we meet count level
  const r = () => (count >= (nElem ** 2)) ? result : undefined;

  // go spiral into the matrix, right(d), down(s), left(a), up(w)
  p();
  while (true) {
    while (cursor.d() !== undefined) {
      p();
      if (r() !== undefined) return r();
    }
    cursor.increaseTopLimit();

    while (cursor.s() !== undefined) {
      p();
      if (r() !== undefined) return r();
    }
    cursor.decreaseRightLimit();

    while (cursor.a() !== undefined) {
      p();
      if (r() !== undefined) return r();
    }
    cursor.decreaseBottomLimit();

    while (cursor.w() !== undefined) {
      p();
      if (r() !== undefined) return r();
    }
    cursor.increaseLeftLimit();
  }
}

array = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
// result ==> [1,2,3,6,9,8,7,4,5]

// array = [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]

log(snail(array)) 

if (true) {

  assert.deepEqual(snail([[]]), []);
  assert.deepEqual(snail([[1]]), [1]);
  assert.deepEqual(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
  assert.deepEqual(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
  assert.deepEqual(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
  log('test ok')
}
