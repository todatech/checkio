const log = console.log;
const assert = require('assert');

function findEvenIndex(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i + 1).reduce((k, v) => k + v) ===
      arr.slice(i, arr.length).reduce((k, v) => k + v)) {
      
        return i;
    }
  }
  return -1;

}

log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
// log(findEvenIndex([20,10,-80,10,10,15,35]),  );

if (true) {

  assert.equal(findEvenIndex([1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
  assert.equal(findEvenIndex([1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
  assert.equal(findEvenIndex([1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
  assert.equal(findEvenIndex([20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");
  log('test ok..');
}
