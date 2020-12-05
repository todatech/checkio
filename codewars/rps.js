const log = console.log;
const assert = require('assert');

const rps = (p1, p2) => {
  const move = {
    'rock': 0,
    'paper': 1,
    'scissors': 2
  }
  const a = move[p1], b = move[p2];
  return (a === b) ? 'Draw!' : (b - a === 1 || b - a === -2) ? 'Player 2 won!' : 'Player 1 won!';
}

const getMsg = (n) => `Player ${n} won!`;

log(rps('rock', 'scissors'), getMsg(1));
log(rps('scissors', 'paper'), getMsg(1));
log(rps('paper', 'rock'), getMsg(1));

log(rps('scissors', 'rock'), getMsg(2));
log(rps('paper', 'scissors'), getMsg(2));
log(rps('rock', 'paper'), getMsg(2));

log(rps('rock', 'rock'), 'Draw!');
log(rps('scissors', 'scissors'), 'Draw!');
log(rps('paper', 'paper'), 'Draw!');
