const chai = require('chai');
const assert = chai.assert;
const log = console.log;

function tour(friends, fTowns, distTable) {

  const path = [...friends];
  path.unshift('A0');
  path.push('A0');

  const houseList = [...fTowns];
  houseList.unshift(['A0', 'X0'])

  // transform distTable array into [house, distance] pair
  const dt = distTable.reduce((acc, val, idx) => {
    (!(idx % 2)) ? acc.push([val]) : acc[Math.floor(idx / 2)].push(val);
    return acc;
  }, [])

  function getHouse(friend) {
    const house = houseList.find(house => house[0] === friend)
    return (house) ? house[1] : undefined;

  }

  function getDistance(house) {
    const location = dt.find(val => val[0] === house);
    return (location) ? location[1]: undefined;
  }

  function distFrom(from, to) {
    if (from === 'X0' || to === 'X0') {
      return (from === 'X0') ? getDistance(to) : getDistance(from);
    } else {
      return Math.sqrt(Math.pow(getDistance(to), 2) - Math.pow(getDistance(from), 2));
    }
  }

  let lastVisit = null;
  return parseInt(path.reduce((acc, currentFriend, idx) => {
    if (idx == 0) {
      lastVisit = currentFriend;
    } else {
      const h1 = getHouse(lastVisit);
      const h2 = getHouse(currentFriend);
      if (h2) {
        acc += distFrom(h1, h2);
        lastVisit = currentFriend;
      }
    }
    return acc;
  }, 0), 10);
}


var friends1 = ["A1", "A2", "A3", "A4", "A5"];
var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];



log(tour(friends1, fTowns1, distTable1))




// describe("tour",function() {

// function testing(friends, fTowns, distTable, exp) {
//     let actual = tour(friends, fTowns, distTable);
//     assert.strictEqual(actual, exp);
// }

// it("Basic tests",function() {
//     var friends1 = ["A1", "A2", "A3", "A4", "A5"];
//     var fTowns1 = [["A1", "X1"], ["A2", "X2"], ["A3", "X3"], ["A4", "X4"]];
//     var distTable1 = ["X1", 100.0, "X2", 200.0, "X3", 250.0, "X4", 300.0];
//     testing(friends1, fTowns1, distTable1, 889);

// })})


// ---- old code
  // return path.reduce((acc, from, idx, arr) => {
  //   houseFrom = getHouse(from);

  //   if (idx !== arr.length) {
  //     acc += distFrom(from, arr[idx + 1], dt);
  //   }
  //   return acc;
  // }, 0)

  // log(getHouse('A2'));
  // log(getDistance('X2'));

  // let a = 0;
  // log(a += distFrom('X0', 'X1'));
  // log(a += distFrom('X1', 'X2'));
  // log(a += distFrom('X2', 'X3'));
  // log(a += distFrom('X3', 'X4'));
  // log(a += distFrom('X4', 'X0'));
  // log(a);


  // let result = 0;
  // let lastVisit = null;

  // path.forEach((currentFriend, idx) => {
  //   if (idx == 0) {
  //     lastVisit = currentFriend; // starting point
  //   } else {
  //     const h1 = getHouse(lastVisit);
  //     const h2 = getHouse(currentFriend);
  //     if (h2) {
  //       result += distFrom(h1, h2);
  //       lastVisit = currentFriend;
  //     }
  //   }
  // })