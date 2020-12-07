const log = console.log;
const assert = require('assert');

// const zero = () => 0;
// const one = () => 1;
// const two = () => 2;
// const three = () => 3;
// const four = () => 4;
// const five = () => 5;
// const six = () => 6;
// const seven = () => 7;
// const eight = () => 8;
// const nine = () => 9;


function op() {
  return function (a, b) {
    return a + b;
  };
}

function num(a) {
  let b = 10;
  c = b + 123;
  if (a !== undefined) {
    return a.call(1, 2)
  } else {
    return { value: 1 }
  }
  // log(arguments)
  // if (arguments) {
  //   return arguments[0];
  // } else {
  //   return 2;
  // }
}
log(num());
// log(num(op(num())));


// function plus() { }
// function minus() { }
// function times() { }
// function dividedBy() { }


// log(seven(times(five())), 35);
// log(four(plus(nine())), 13);
// log(eight(minus(three())), 5);
// log(six(dividedBy(two())), 3);