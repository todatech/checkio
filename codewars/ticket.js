//Vasya - Clerk

const assert = require('assert');
const log = console.log;

function tickets(peopleInLine) {
  let drawer = [0, 0, 0]    //drawer right now [25 bills, and 50 bills, 100 bills <- extra, no need to
  for (let i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        drawer[0]++;
        break;
      case 50:
        if (drawer[0]) {
          drawer[0]--;
          drawer[1]++;
        } else {
          return 'NO';
        }
        break;
      case 100:
        if (drawer[0] >= 3) {
          drawer[0] -= 3;
          drawer[2]++;
        } else if (drawer[0] && drawer[1]) {
          drawer[0]--;
          drawer[1]--;
          drawer[2]++;
        } else {
          return 'NO';
        }
        break;
    }
  }
  return 'YES';
}

log(tickets([25, 25, 50]));

if (true) {

  assert.equal(tickets([25, 25, 50]), 'YES');
  assert.equal(tickets([25, 100]), 'NO');
  assert.equal(tickets([25, 25, 50, 50, 100]), 'NO');
  // assert.equal(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100]), 'YES');
  // assert.equal(tickets([25, 50, 100, 25, 25, 25, 50]), 'YES');
  assert.equal(tickets([25,25,25,100,25,25,50,100,25,25,25,100]), 'YES');



  log('test ok.')
}