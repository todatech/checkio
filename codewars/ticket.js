//Vasya - Clerk

const assert = require('assert');
const log = console.log;

// adding all vectors of A and all vectors of B together 
function addVectorsAB(a, b) {
  const final = [];
  a.forEach(u => {
    b.forEach(w => {
      const result = [];
      for (let i = 0; i < u.length; i++) {
        result.push(u[i] + w[i]);
      }
      final.push(result);
    })
  })
  return final;
}

// exchange instruction for every payment of $25 [#_of_$25, #_of_$50, #_of_$100]
let exchangeInst = {
  '25': [[1, 0, 0]],
  '50': [[-1, 1, 0]],
  '100': [[-3, 0, 1], [-1, -1, 1]],
}

function tickets(peopleInLine) {

  let breakException = {};
  let drawerStates = [[0, 0, 0]];

  try {
    peopleInLine.forEach(paid => {
      const newDrawerStates = addVectorsAB(drawerStates, exchangeInst[paid]);
      drawerStates = newDrawerStates.filter(r => !r.some(v => v < 0));
      if (!drawerStates.length) throw breakException;
    })
  } catch (e) {
    if (e !== breakException) throw e;
  } finally {
    return (drawerStates.length) ? 'YES' : 'NO';
  }
}

// log('FINAL RESULT: ', tickets([25, 25, 25, 25, 50, 100, 50]));

if (true) {

  assert.equal(tickets([25, 25, 25, 25, 50, 100, 50]), 'YES');        // there is a branch from 100!!!!
  assert.equal(tickets([25, 100, 25, 25, 50, 100, 50]), 'NO');        // there is a branch from 100!!!!

  assert.equal(tickets([25, 25, 50]), 'YES');
  assert.equal(tickets([25, 100]), 'NO');
  assert.equal(tickets([25, 25, 50, 50, 100]), 'NO');
  assert.equal(tickets([25, 25, 50, 100, 25, 50, 25, 100, 25, 25, 25, 100]), 'YES');
  assert.equal(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 25, 100]), 'YES');
  assert.equal(tickets([25, 25, 50, 100]), 'YES');
  log('test ok.')
}


// old code
// let drawer = [0, 0, 0]    //drawer right now [25 bills, and 50 bills, 100 bills <- extra, no need to
// for (let i = 0; i < peopleInLine.length; i++) {
//   switch (peopleInLine[i]) {
//     case 25:
//       drawer[0]++;
//       break;
//     case 50:
//       if (drawer[0]) {
//         drawer[0]--;
//         drawer[1]++;
//       } else {
//         return 'NO';
//       }
//       break;
//     case 100:
//       if (drawer[0] >= 3) {
//         drawer[0] -= 3;
//         drawer[2]++;
//       } else if (drawer[0] && drawer[1]) {
//         drawer[0]--;
//         drawer[1]--;
//         drawer[2]++;
//       } else {
//         return 'NO';
//       }
//       break;
//   }
// }
// return 'YES';



  // for (let idx = 0; idx < peopleInLine.length; idx++) {
  //   const paid = peopleInLine[idx];
  //   log('user ', idx, 'paid: ', paid)
  //   let possibleChg = change[paid];

  //   for(let i = 0; i< possibleDrawers.length;i++) {

  //   }


  //   possibleDrawers = possibleDrawers.reduce((k, drawer) => {
  //     let drawerStates = possibleChg.map(c => {
  //       return drawer.map((v, i) => v + +c[i]);
  //     });
  //     k.push(drawerStates);
  //     return k;
  //   }, []);

  //   log(possibleDrawers);



  // }

  // let drawer = drawer.map(d => {
  //   let pc = possibleChg.map(c => {
  //     return (d.map((v, i) => v + c[i]));
  //   })
  //   log('pc: ', pc);
  //   return pc;
  // })
  // log('possible drawer: ', idx, ' - ', drawer);

  // results = results.filter(r => {
  //   let test = !r.some(v => v < 0);
  //   // log('test: ', test);
  //   return test;
  // })

  //   if (results.length) {
  //     drawer = results[0];
  //   } else {
  //     return 'NO';
  //   }
  //   log('drawer now: ', idx, ' - ', drawer);
  // }
  // return 'YES';
