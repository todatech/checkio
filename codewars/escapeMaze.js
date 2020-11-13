const readline = require("readline");
const assert = require('assert');
const log = console.log;

// This will translate
// the move instruction i.e. up,down,left,right 
// to walk instruction i.e. forward, turn left, turn right, turn back;

// Move Code  Bearing Before    Bearing After
//            v   >   ^   <  
// 0 - down   F   RF  BF  LF    v
// 1 - right  LF  F   RF  BF    >
// 2 - up     BF  LF  F   RF    ^
// 3 - left   RF  BF  LF  F     <

const bearings = ['v', '>', '^', '<'];

const goDirection = [
  [0, 1],     // down
  [1, 0],     // right
  [0, -1],    // up
  [-1, 0]     // left
];

const instructLookup = [
  ['F', 'RF', 'BF', 'LF'],
  ['LF', 'F', 'RF', 'BF'],
  ['BF', 'LF', 'F', 'RF'],
  ['RF', 'BF', 'LF', 'F'],
];

// Helper Functions, arraysEqual, deepCode

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function deepCopy(inObject) {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  }

  outObject = Array.isArray(inObject) ? [] : {}
  for (key in inObject) {
    value = inObject[key];
    outObject[key] = deepCopy(value);
  }

  return outObject;
}

class Locator {

  constructor(maze) {
    this.maze = maze;
    this.startCoord = [0, 0];
    this.coord = [0, 0];
    this.bearing = '';

    this.currentDistance = 0;
    this.resultDistances = [];

    this.trackMap = [];
    // this.resultMaps = [];

    this.moveSequence = [];
    this.resultSequences = [];

    this.initWithMaze();
  }

  get x() { return this.coord[0]; }
  get y() { return this.coord[1]; }
  get boundary() { return [this.maze[0].length, this.maze.length]; }

  initWithMaze() {
    this.locateInitBearing();    // find init coord and bearing
    this.locateExits();          // find all exits
  }

  breakpoint() {
    // a useless move to capture breakpoint
    let a = 1; a++; return a;
  }

  // using keyboard to navigator around the maze and check if functions are good.
  updateMove(x, y) {
    if (this.isValidMove(x, y) && this.isOpenMove(x, y)) {
      //update current position;
      this.coord = [x, y];
      return this.isAnExit(x, y);
    } else {
      return undefined;
    }
  }
  s() { return this.updateMove(this.x, this.y + 1); }
  w() { return this.updateMove(this.x, this.y - 1); }
  a() { return this.updateMove(this.x - 1, this.y); }
  d() { return this.updateMove(this.x + 1, this.y); }

  // overlaying features (start, exits, paths, maze) onto simple display
  overlayPath() {
    const overlay = [];
    this.maze.forEach((row, j) => {
      overlay.push([]);
      row.split('').forEach((col) => {
        overlay[j].push(col);
      });
    });

    this.maze.forEach((row, j) => {
      row.split('').forEach((_col, i) => {
        // exits
        if (this.isAnExit(i, j)) {
          overlay[j][i] = 'E';
        }
        // current backtracking path
        if (this.trackMap.length) {
          if (this.trackMap[j][i]) {
            overlay[j][i] = 'x';
          }
        }
        // resulting path
        // if (this.resultDistances[0] !== undefined) {
        //   // if (this.resultDistance[0]?.length) {
        //   if (this.resultMaps[0][j][i]) {
        //     overlay[j][i] = '0';
        //   }
        // }
        // current location
        if (arraysEqual(this.coord, [i, j])) {
          overlay[j][i] = '*';
        }
      });
    });

    return overlay.map(row => row.join('')).join('\n');
  }

  isOpenMove(x, y) { return this.maze[y][x] === ' '; }
  isVisited(x, y) { return this.trackMap[y][x]; }
  isSafeMove(x, y) { return (this.maze[y][x] === ' ' && this.trackMap[y][x] === undefined); }
  isValidMove(x, y) { return !(x < 0 || y < 0 || x >= this.boundary[0] || y >= this.boundary[1] || this.maze[y][x] === '#'); }
  isAnExit(x, y) { return this.exits.some(val => arraysEqual(val, [x, y])); }

  createEmptyTrackMap() {
    const limX = this.boundary[0];
    const limY = this.boundary[1];

    const map = [];
    for (let j = 0; j < limY; j++) {
      map[j] = new Array(limX);
    }
    this.trackMap = map;
  }

  startTracking() {
    this.currentDistance = 0;
    this.resultDistances = [];

    // this.resultMaps = [];
    this.createEmptyTrackMap();

    this.moveSequence = [];
    this.resultSequences = [];
    this.lastMove = -1;

    if (this.exits.length) {
      this.tracking(this.startCoord[0], this.startCoord[1]);
    }
  }

  tracking(x, y) {

    // Check Exit
    if (this.isAnExit(x, y)) {

      this.currentDistance += 1;
      this.moveSequence.push(this.lastMove);

      // const resultMap = deepCopy(this.trackMap);
      // this.resultMaps.unshift(resultMap);

      this.resultDistances.unshift(this.currentDistance);
      const resultSeq = deepCopy(this.moveSequence);
      this.resultSequences.unshift(resultSeq);

      this.currentDistance -= 1;
      this.moveSequence.pop();

      return;
    }

    // Start Tracking
    this.trackMap[y][x] = true;
    this.currentDistance += 1;
    this.moveSequence.push(this.lastMove);    //record sequence of move

    // Explore 4 different directions
    for (let i = 0; i < 4; i++) {
      let m = x + goDirection[i][0];
      let n = y + goDirection[i][1];
      this.lastMove = i;

      if (this.isValidMove(m, n) && this.isSafeMove(m, n)) {
        this.tracking(m, n);
      }
    }

    // If we are have no more move from the above, we will backtrack.
    this.currentDistance -= 1;
    this.moveSequence.pop();
    this.trackMap[y][x] = undefined;
  }

  locateInitBearing() {
    const limX = this.boundary[0];
    const limY = this.boundary[1];

    outer:
    for (let i = 0; i < limX; i++) {
      for (let j = 0; j < limY; j++) {
        if (bearings.includes(this.maze[j][i])) {
          this.startCoord = this.coord = [i, j];
          this.bearing = this.maze[j][i];
          break outer;
        }
      }
    }
  }

  locateExits() {
    const limX = this.boundary[0];
    const limY = this.boundary[1];

    const testChars = [...bearings, ' '];

    const possibleExits = [];
    for (let i = 0; i < limX; i++) {
      if (testChars.includes(this.maze[0][i])) { possibleExits.push([i, 0]); }
      if (testChars.includes(this.maze[limY - 1][i])) { possibleExits.push([i, limY - 1]); }
    }
    for (let j = 0; j < limY; j++) {
      if (testChars.includes(this.maze[j][0])) { possibleExits.push([0, j]); }
      if (testChars.includes(this.maze[j][limX - 1])) { possibleExits.push([limX - 1, j]); }
    }
    this.exits = possibleExits;
  }

  getInstruction() {

    if (!this.exits.length) return [];

    if (this.resultDistances.length) {
      let currentBearing = bearings.findIndex(val => val === this.bearing);

      // find minimum distance solution
      const min = Math.min(...this.resultDistances);
      const idx = this.resultDistances.findIndex(v => v === min);
      const seq = deepCopy(this.resultSequences[idx]);

      //remove the first element which is usually -1
      return seq.slice(1,).reduce((acc, val) => {
        acc.push(instructLookup[val][currentBearing]);
        currentBearing = val;
        return acc;
      }, [])
        .join('');

    } else {
      return [];
    }
  }
}

function escape(maze) {

  const loc = new Locator(maze);
  loc.startTracking();
  return loc.getInstruction();
}

let basicMazes = [];
let yourMazes = []; // Add your own tests in there!

function testMazes(mazes, expectedAnswer = undefined) {
  // let pathTester = new PathTester();
  mazes.forEach(function (maze) {
    // let your_answer = escape(maze);
    log(escape(maze))
    // if (expectedAnswer)
    //   Test.assertSimilar(your_answer, expectedAnswer);
    // else
    //   Test.expect(pathTester.testPath(your_answer, maze), pathTester.errorMessage);
  });
}
basicMazes.push([
  '######### #',
  '#    ^    #',
  '# #########'
]);

basicMazes.push([
  '#########',
  '#   #   #',
  '# #   #>#',
  '# #######'
]);

basicMazes.push([
  '## ##',
  '#   #',
  '  >  ',
  '#   #',
  '## ##'
]);

basicMazes.push([
  '# #',
  ' > ',
  '# #'
]);

basicMazes.push([
  '##########',
  '#>       #',
  '######## #'
]);

basicMazes.push([
  '# ########',
  '#       >#',
  '##########'
]);

basicMazes.push([
  '####### #',
  '#>#   # #',
  '#   #   #',
  '#########'
]);

basicMazes.push([
  '##########',
  '#        #',
  '#  ##### #',
  '#  #   # #',
  '#  #^# # #',
  '#  ### # #',
  '#      # #',
  '######## #'
]);
basicMazes.push([
  "#########################################",
  "#<    #       #     #         # #   #   #",
  "##### # ##### # ### # # ##### # # # ### #",
  "# #   #   #   #   #   # #     #   #   # #",
  "# # # ### # ########### # ####### # # # #",
  "#   #   # # #       #   # #   #   # #   #",
  "####### # # # ##### # ### # # # #########",
  "#   #     # #     # #   #   # # #       #",
  "# # ####### ### ### ##### ### # ####### #",
  "# #             #   #     #   #   #   # #",
  "# ############### ### ##### ##### # # # #",
  "#               #     #   #   #   # #   #",
  "##### ####### # ######### # # # ### #####",
  "#   # #   #   # #         # # # #       #",
  "# # # # # # ### # # ####### # # ### ### #",
  "# # #   # # #     #   #     # #     #   #",
  "# # ##### # # ####### # ##### ####### # #",
  "# #     # # # #   # # #     # #       # #",
  "# ##### ### # ### # # ##### # # ### ### #",
  "#     #     #     #   #     #   #   #    ",
  "#########################################"
]);

// basicMazes.push([
//   '###',
//   '#>#',
//   '###'
// ]);

// basicMazes.push([
//   '###########', 
//   '#         #', 
//   '#v#########' 
// ]);

basicMazes.push([
  ' # # # # ',
  '# # # # #',
  '#       #',
  '#  ###  #',
  '# #   # #',
  '# # #v# #',
  '# #  #  #',
  '# #     #',
  '# # # # #',
  ' # # # # '
]);

// log(testMazes(basicMazes));

/*
Test.describe( "Fixed tests", function() {
  Test.it("Basic tests", function() {
    testMazes(basicMazes);
  });
});
Test.describe( "Your personal tests", function() {
  testMazes(yourMazes);
});
*/

let loadedMaze = 9;
let loc = new Locator(basicMazes[loadedMaze]);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function waitForUserInput() {
  rl.question(" > ", function (answer) {
    let ended = false;
    switch (answer) {
      case 'a':
        ended = loc.a();
        break;
      case 's':
        ended = loc.s();
        break;
      case 'd':
        ended = loc.d()
        break;
      case 'w':
        ended = loc.w();
        break;
      case 'c':
        log(loc.coord);
        break;
      case 't':
        loc.startTracking();
        break;
      case 'i':
        log(loc.getInstruction());
        break;
      case 'p':
        if (loc.resultSequences[0] !== undefined) {
          log(loc.resultSequences[0]);
        }
        break;
      case 'z':
        loc.breakpoint();  //go to breakpoint
        break;
    }

    let isnum = /^\d+$/.test(answer);
    if (isnum) {
      const num = parseInt(answer, 10);
      if (num >= 0 && num < basicMazes.length) {
        log('Load map: ', num);
        loadedMaze = num
        loc = new Locator(basicMazes[loadedMaze]);
      }
    }

    if (answer == 'exit') {
      rl.close();
    } else {
      log(loc.overlayPath());
      if (ended) {
        log('you have found the exit. A new map is loaded');
        const num = loadedMaze + 1;
        if (num >= 0 && num < basicMazes.length) {
          log('Load map: ', num);
          loadedMaze = num
          loc = new Locator(basicMazes[loadedMaze]);
        }
      }
      waitForUserInput();
    }
  });
}
waitForUserInput();


// old code ----------
// function findBearing(maze) {
//   let bearing = [];
//   let BreakException = {};

//   try {
//     maze.forEach((row, j) => {
//       row.split('').forEach((col,i) => {
//         if (col === '^' || col === '<' || col === '>' || col === 'v') {
//           bearing.push([i, j], col);
//           throw BreakException;
//         }
//       })
//     });
//   }
//   catch (e) {
//     if (e !== BreakException) throw e;
//   }
//   return bearing;
// }
// log('bearing: ', findBearing(maze));