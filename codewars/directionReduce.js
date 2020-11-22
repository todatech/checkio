const log = console.log;
const assert = require('assert');

function findArr(arr, subArr) {
  loop: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < subArr.length; j++) {
      if (arr[i + j] !== subArr[j]) {
        continue loop;
      }
    }
    return i;
  }
  return -1;
}


function dirReduc(arr) {
  const ns = ['NORTH', 'SOUTH'];
  const ew = ['EAST', 'WEST'];
  const sn = ns.slice().reverse();
  const we = ew.slice().reverse();
  const list = [ns, ew, sn, we];
  
  const ans = arr.slice();
  let done = false;

  while (!done) {

    let count = 0;
    list.forEach(pair => {

      const idx = findArr(ans, pair);
      (~idx) ? ans.splice(idx, 2) : count++;

      if (count >= list.length) done = true;
    })
  }

  return ans;
}

// log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
log(dirReduc([ 'NORTH','EAST','NORTH','EAST','WEST','WEST','EAST','EAST','WEST','SOUTH' ]), ['NORTH', 'EAST'])


if (true) {
  assert.deepEqual(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
  assert.deepEqual(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
  assert.deepEqual(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
  log('test ok...')
}