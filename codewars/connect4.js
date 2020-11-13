const assert = require('assert');
const log = console.log;

const ROW = 6;
const COL = 7;

function Connect4() {

  this.gameGrid = [];
  this.currentPlayer = null;
  this.gameIsOver = false;

  this.createGameGrid = function () {
    // log('new game\n')
    this.currentPlayer = 1;
    for (let i = 0; i < COL; i++) { this.gameGrid[i] = []; }
  }

  this.checkForWin = function (move) {

    const mat = this.gameGrid;
    const col = move;
    const row = mat[col].length - 1;
    const p = this.currentPlayer.toString();

    const re = new RegExp(this.currentPlayer.toString().repeat(4));

    function replaceWithStars(str) {
      let arr = str.split(',')
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '') { arr[i] = '*'; }
      }
      return arr.join('');
    }
    // gather column data to see if win
    let c = replaceWithStars(mat[col].join(','));

    // gather row data to see if win
    let r = replaceWithStars(mat.map(val => val[row]).join(','));

    // gather diagonal 1 data to see if win  
    const d1 = []
    for (let i = 0; i < COL; i++) { d1.push(mat[i][i + row - col]) }
    let x = replaceWithStars(d1.join(','));

    // gather diagonal 2 data to see if win
    const d2 = []
    for (let i = 0; i < COL; i++) { d2.push(mat[i][col + row - i]) }
    let y = replaceWithStars(d2.join(','))

    let winning = false;
    winning = re.test(c) || re.test(r) || re.test(x) || re.test(y);

    (winning) ? this.gameIsOver = true : 0;
    return winning;
  }

  this.showGameGrid = function () {

    return this.gameGrid.map(val => (val.join('') + '*'.repeat(ROW - val.length)).split(''))
      .reduce((acc, val, idx) => {
        (idx === 0) ? val.forEach(play => acc.push([play])) : val.forEach((play, idx) => acc[idx].push(play))
        return acc;
      }, [])
      .reduce((acc, val) => {
        acc.unshift(val.join(''));
        return acc;
      }, [])
      .join('\n');
  }

  this.next = function (move) {

    if (this.gameIsOver) return 'Game has finished!';

    if (!this.currentPlayer) { this.createGameGrid(); }

    // record the moves
    if (move >= 0 && move < COL) {
      if (this.gameGrid[move].length < ROW) {
        this.gameGrid[move].push(this.currentPlayer);
        // switch between player 1 or 2
        const prompt = (this.checkForWin(move)) ? `Player ${this.currentPlayer} wins!` : `Player ${this.currentPlayer} has a turn`;
        (this.currentPlayer === 1) ? this.currentPlayer = 2 : this.currentPlayer = 1;
        // log(this.showGameGrid());
        return prompt;
      } else {
        return 'Column full!';
      }
    }
  }
};

Connect4.prototype.play = function (col) {
  // log(col);
  const msg = this.next(col);
  // log(msg + '\n');
  return msg;
};

game = new Connect4();
// log(game.play(0));
// log(game.play(0));

if (true) {
  // game = new Connect4();
  // assert.equal(game.play(0), "Player 1 has a turn")
  // assert.equal(game.play(0), "Player 2 has a turn")

  game = new Connect4();
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

  // game = new Connect4();
  // assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(4), "Column full!", "Should return 'Column full!'")

  // game = new Connect4();
  // assert.equal(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  // assert.equal(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  // assert.equal(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
  // assert.equal(game.play(4), "Game has finished!", "Should return 'Game has finished!'")

  log('test ok...')
}


// const gg1 = [
//   [1, 1, 1],
//   [2, 2, 1, 2],
//   [2, 1, 1, 1, 2],
//   [1, 2, 1, 2, 2],
//   [1, 2, 1, 2, 1],
//   [1, 2, 2, 2, 1],
//   [2, 2, 2, 1],
// ]

// function showGrid(mat) {
//   let row = 6;
//   const t = mat.map(val => (val.join('') + '*'.repeat(row - val.length)).split(''))
//   const u = t.reduce((acc, val, idx) => {
//     if (idx === 0) {
//       val.forEach(play => acc.push([play]))
//     } else {
//       val.forEach((play, idx) => acc[idx].push(play))
//     }
//     return acc;
//   }, [])

//   let result = []
//   for (let i = 0; i < u.length; i++) {
//     result.push(u[u.length - 1 - i].join(''));
//   }
//   return result.join('\n');
// }
// // log(showGrid(gg1))


// function check4W(mat, col) {

//   const player = 2;
//   const row = mat[col].length - 1;
//   const reWinPattern = new RegExp(player.toString().repeat(4));

//   //check column to see if win
//   const c = mat[col].join('');
//   log(c);
//   log((c.match(reWinPattern)) ? 'c: y!' : 'c: n');

//   //check row to see if win
//   const r = mat.map(val => val[row]).join('');
//   log(r);
//   log((r.match(reWinPattern)) ? 'r: y!' : 'r: n');

//   // check diagonal 1 to see if win  
//   const x1 = row - col;
//   const d1 = []
//   for (let i = 0; i < 7; i++) { d1.push(mat[i][i + x1]) }
//   log(d1);
//   log((d1.join('').match(reWinPattern)) ? 'd1: y!' : 'd1: n');

//   // check diagonal 2 to see if win
//   const d2 = []
//   const y1 = col + row;
//   for (let i = 0; i < 7; i++) { d2.push(mat[i][y1 - i]) }
//   log(d2)
//   log((d2.join('').match(reWinPattern)) ? 'd2: y!' : 'd2: n');

//   return;
// }

// log(check4W(gg1, 6))