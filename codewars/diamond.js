const log = console.log;
const assert = require('assert');

function diamond(n) {

  if (n < 0 || (!(n % 2)))
    return null;

  let c = Math.ceil(n / 2);
  let result = [];
  let star = -1;
  let space = c;

  for (let i = 0; i < n; i++) {
    if (i < c) {
      star += 2; space -= 1;
    } else {
      star -= 2; space += 1;
    }
    result.push(''.concat(' '.repeat(space), '*'.repeat(star), '\n'));
  }
  return result.join('');
}

log(diamond(1))//, "*\n")
log(diamond(3))//, " *\n***\n *\n")
log(diamond(5))//, "  *\n ***\n*****\n ***\n  *\n")
log(diamond(2), null)
log(diamond(-3), null)
log(diamond(0), null)



// function* genSequence(n) {
//   let counter = -1;
//   let c = Math.ceil(n / 2);
//   for (let i = 0; i < n; i++) {
//     (i < c) ? counter += 2 : counter -= 2;
//     yield counter;
//   }
// }