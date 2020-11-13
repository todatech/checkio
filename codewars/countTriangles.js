const assert = require('assert');
const log = console.log;

function countColTriang(pointsList) {

  function combinations(arr, n) {
    const fn = function (active, rest, a) {
      if (!active.length && !rest.length) return;
      if (!rest.length) {
        if (active.length === n) {
          a.push(active);
        }
      } else {
        fn(active.concat(Array(rest[0])), rest.slice(1), a);
        fn(active, rest.slice(1), a);
      }
      return a;
    }
    return fn([], arr, [])
  }

  function det(p1, p2, p3) {
    let a, b, d, e, g, h;
    [a, b] = p1;
    [d, e] = p2;
    [g, h] = p3;

    // det(M) = a(ei-fh)-b(di-fg)+c(dh-eg);     // and c,f,i = 1; 
    return (a * (e - h) - b * (d - g) + (d * h - e * g))
  }

  function getNumOfTrianglesBy(group) {

    // will pick out the coord info without the group name
    const ptsByGroup = pointsList.reduce((acc, val) => {
      if (val[1] === group) { acc.push(val[0]) };
      return acc;
    }, []);

    // select all the combinations of 3 points to form possible triangles
    const comboPts = combinations(ptsByGroup, 3);

    // find the determininant of each set and return the count
    // if det = 0, pts from a line
    if (comboPts.length !== 0) {
      return comboPts.reduce((acc, val) => {
        acc += (!!(det(val[0], val[1], val[2])) ? 1 : 0)
        return (acc);
      }, 0);
    } else {
      return 0;
    }
  }

  // Formulate the answers
  let a1, a2, a3, a4;

  // 1) Total given points
  a1 = pointsList.length
  // log('num of pts: ', a1)

  // 2) Total number of colours
  const colorSet = new Set();
  pointsList.forEach(val => colorSet.add(val[1]));
  // log('color set: ', colorSet)
  a2 = colorSet.size
  // log('color set count: ', a2)

  // 3) get possible triangle count for each group
  const possibleTriangles = Array.from(colorSet).reduce((acc, color) => {
    acc[color] = getNumOfTrianglesBy(color);
    return acc;
  }, {});
  // log('possibleTriangles: ', possibleTriangles)

  const sumOfAllTriangles = a3 = Object.values(possibleTriangles).reduce((k, v) => k + v);
  // log('sum of triangles: ', a3)

  const maxTriangles = Math.max(...Object.values(possibleTriangles));
  // log('max possible triangles: ', maxTriangles);

  // // 4) or 5) Color(s) with highest amount of triangles
  if (maxTriangles) {
    const colorOfMaxTriangles = a4 =
      Object.entries(possibleTriangles).filter(val => val[1] === maxTriangles)
        .sort((a, b) => a > b)
        .map(val => val[0]);

    colorOfMaxTriangles.push(maxTriangles);
    // log('max triangle color: ', a4)
  } else {
    a4 = [];
  }

  return [a1, a2, a3, a4];
}


var pointsList1 = [[[3, -4], 'blue'], [[-7, -1], 'red'],
[[7, -6], 'yellow'], [[2, 5], 'yellow'],
[[1, -5], 'red'], [[-1, 4], 'red'],
[[1, 7], 'red'], [[-3, 5], 'red'],
[[-3, -5], 'blue'], [[4, 1], 'blue'],
];

var pointsList2 = [[[3, -4], 'blue'], [[-7, -1], 'red'],
[[7, -6], 'yellow'], [[2, 5], 'yellow'],
[[1, -5], 'red'], [[1, 1], 'red'],
[[1, 7], 'red'], [[1, 4], 'red'],
[[-3, -5], 'blue'], [[4, 1], 'blue']];

var pointsList3 = [[[1, -2], 'red'], [[7, -6], 'yellow'],
[[2, 5], 'yellow'], [[1, -5], 'red'], [[1, 1], 'red'],
[[1, 7], 'red'], [[1, 4], 'red'], [[-3, -5], 'blue'], [[4, 1], 'blue']];

// log(countColTriang(pointsList1));
log(countColTriang(pointsList2));
// log(countColTriang(pointsList3));


// test n choose r
// let pt1 = [1, -5];
// let pt2 = [1, 1];
// let pt3 = [1, 7];
// let pt4 = [1, 4];
// let pt5 = [-7, -1];
// log(det(pt1, pt2, pt3));
// log(det(pt4, pt2, pt3));
// log(det(pt4, pt5, pt3));

// test combinations of 3
// let test = ["a", "b", "c", "d", "e"];
// let test = [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]];
// log(combinations(test, 3))

// const asdf = [].concat(test[0], test[1]);
// log(asdf);



/*
describe("Example Tests", function () {
  it("Small list of Points with Edge Cases", function () {
    var pointsList1 = [[[3, -4], 'blue'], [[-7, -1], 'red'],
    [[7, -6], 'yellow'], [[2, 5], 'yellow'],
    [[1, -5], 'red'], [[-1, 4], 'red'],
    [[1, 7], 'red'], [[-3, 5], 'red'],
    [[-3, -5], 'blue'], [[4, 1], 'blue']];
    Test.assertSimilar(countColTriang(pointsList1), [10, 3, 11, ['red', 10]]);

    var pointsList2 = [[[3, -4], 'blue'], [[-7, -1], 'red'],
    [[7, -6], 'yellow'], [[2, 5], 'yellow'],
    [[1, -5], 'red'], [[1, 1], 'red'],
    [[1, 7], 'red'], [[1, 4], 'red'],
    [[-3, -5], 'blue'], [[4, 1], 'blue']];
    Test.assertSimilar(countColTriang(pointsList2), [10, 3, 7, ['red', 6]]);

    var pointsList3 = [[[1, -2], 'red'], [[7, -6], 'yellow'],
    [[2, 5], 'yellow'], [[1, -5], 'red'], [[1, 1], 'red'],
    [[1, 7], 'red'], [[1, 4], 'red'], [[-3, -5], 'blue'], [[4, 1], 'blue']];
    Test.assertSimilar(countColTriang(pointsList3), [9, 3, 0, []]);
  });
});
*/


// old code ---

// function choose(n, k) {
//   if (k == 0) return 1
//   return (n * choose(n - 1, k - 1)) / k
// }

// 3a) Vertex for each color
// let colorCount = pointsList.reduce((acc, val) => {
//   (val[1] in acc) ? acc[val[1]] += 1 : acc[val[1]] = 1;
//   return acc;
// }, {})
// log('vertex count: ', colorCount);

  // // 3b) possible number of triangles
  // let possibleTriangles = Object.fromEntries(
  //   Object.entries(colorCount).map(val => [val[0], choose(val[1], 3)])
  // )
