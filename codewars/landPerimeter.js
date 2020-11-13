const assert = require('assert');
const log = console.log;

function landPerimeter(arr) {
  // log(arr.join('\n').replace(/O/g, '.'));

  function getNeighbours(i, j) {
    // find top, bottom, left, right to see if there's neighbouring X 
    const coords = [
      [i - 1, j],
      [i + 1, j],
      [i, j - 1],
      [i, j + 1],
    ];

    return coords.map((c) => {
      let pa;
      try {
        pa = arr[c[0]][c[1]];
      } catch(err) {
        pa = 'B';
      } finally {
        if (pa === undefined) pa = 'B';
      }
      return pa;
    }).reduce((acc, val) => {
      if (val == 'X') { acc += 1 };
      return acc;
    }, 0);
  }

  // walk through the whole array for each X, count its neighbouring X, 
  // If I have no neighbour, I have 4 perimeter units.  
  let result = arr.reduce((acc, row, i) => {
    row.split('').forEach((block, j) => {
      if (block == 'X') {
        acc += 4 - getNeighbours(i, j);
      }
    })
    return acc;
  }, 0);

  return `Total land perimeter: ${result}`;
}


log(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]));


if (true) {
  assert.equal(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
  assert.equal(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
  assert.equal(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
  assert.equal(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
  assert.equal(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
  log('test ok...')
}