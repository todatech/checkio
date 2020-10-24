const assert = require('assert');
const log = console.log;

function likes(names) {

  let s = '';
  let n = names.length;
  switch (n) {
    case 0:
      s = "no one likes this"; 
      break;
    case 1:
      s = `${names[0]} likes this`;
      break;
    case 2:
      s = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      s = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      s = `${names[0]}, ${names[1]} and ${n-2} others like this`;
      break;
  }
  return s;
}

log(likeThis(["Jacob", "Alex"]));

if (true) {

  assert.equal(likes([]), "no one likes this");
  assert.equal(likes(["Peter"]), "Peter likes this");
  assert.equal(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
  assert.equal(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");
  assert.equal(likes(["Alex", "Jacob", "Mark", "Max"]), "Alex, Jacob and 2 others like this");

  log('test ok.')
}