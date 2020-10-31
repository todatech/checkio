const assert = require('assert');
const log = console.log;

function Connect4() {

  this.gameGrid = [];
  this.currentPlayer = null;
  this.gameIsOver = false;
  this.row = 6;
  this.col = 7;

  this.createGameGrid = function () {
    for (let i = 0; i < this.col; i++) { this.gameGrid[i] = []; }
  }

  this.checkForWin = function (move) {

    const mat = this.gameGrid;
    const col = move;
    const row = mat[col].length - 1;
    const reWinPattern = new RegExp(this.currentPlayer.toString().repeat(4));
    let winning = false;

    //check column to see if win
    const c = mat[col].join('');
    c.match(reWinPattern) ? winning = true : 0;

    //check row to see if win
    const r = mat.map(val => val[row]).join('');
    r.match(reWinPattern) ? winning = true : 0;

    // check diagonal 1 to see if win  
    const x1 = row - col;
    const d1 = []
    for (let i = 0; i < 7; i++) { d1.push(mat[i][i + x1]) }
    d1.join('').match(reWinPattern) ? winning = true : 0;

    // check diagonal 2 to see if win
    const d2 = []
    const y1 = col + row;
    for (let i = 0; i < 7; i++) { d2.push(mat[i][y1 - i]) }
    d2.join('').match(reWinPattern) ? winning = true : 0;

    if (winning) {
      this.gameIsOver = true;
    }
    return winning;
  }

  this.showGameGrid = function () {

    const t = this.gameGrid.map(val => (val.join('') + '*'.repeat(this.row - val.length)).split(''))
    const u = t.reduce((acc, val, idx) => {
      (idx === 0) ? val.forEach(play => acc.push([play])) : val.forEach((play, idx) => acc[idx].push(play))
      return acc;
    }, [])

    let result = []
    for (let i = 0; i < u.length; i++) {
      result.push(u[u.length - 1 - i].join(''));
    }
    return result.join('\n');
  }

  this.next = function (move) {
    if (this.gameIsOver) return 'Game has finished!';
    if (!this.currentPlayer) {
      this.createGameGrid();
      this.currentPlayer = 1;
    } else {
      (this.currentPlayer === 1) ? this.currentPlayer = 2 : this.currentPlayer = 1;
    }
    if (move >= 0 && move < this.col) {
      if (this.gameGrid[move].length < this.row) {
        this.gameGrid[move].push(this.currentPlayer);
      } else {
        return 'Column full!';
      }
    }
    const winning = this.checkForWin(move);
    log(this.showGameGrid());
    return (winning) ? `Player ${this.currentPlayer} wins!` : `Player ${this.currentPlayer} has a turn`;
  }
};

Connect4.prototype.play = function (col) {
  const msg = this.next(col);
  log(msg + '\n');
  return msg;
};

game = new Connect4();
log(game.play(0));
log(game.play(0));

if (true) {
  game = new Connect4();
  assert.equal(game.play(0), "Player 1 has a turn")
  assert.equal(game.play(0), "Player 2 has a turn")

  // game = new Connect4();
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(0), "Player 1 wins!", "Should return 'Player 1 wins!'")

  game = new Connect4();
  assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(4), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(4), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(4), "Column full!", "Should return 'Column full!'")

  game = new Connect4();
  assert.equal(game.play(1), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(1), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(2), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(2), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(3), "Player 1 has a turn", "Should return 'Player 1 has a turn'")
  assert.equal(game.play(3), "Player 2 has a turn", "Should return 'Player 2 has a turn'")
  assert.equal(game.play(4), "Player 1 wins!", "Should return 'Player 1 wins!'")
  assert.equal(game.play(4), "Game has finished!", "Should return 'Game has finished!'")

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