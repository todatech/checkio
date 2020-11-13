const assert = require('assert');
const log = console.log;

function yack(func, ...args) {

  if (args.length >= func.length) {
    return func(...args);
  } else {
    return function curried(...args1) {
      
      if ((args.length + args1.length) >= func.length) {
        return func(...args, ...args1);
      } else {
        return (...args2) => {
          return curried(...args1, ...args2);
        }
      }
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}
// log(yack(add, 1, 2)(3));
log(yack(add, 3, 2, 6, 20));


// log(yack(add)(1)(2)(3))
// log(yack(add, 1, 2)(3));
// log(yack(add)(1, 2)(3));
// log(yack(add)(1)()()()(2)(3));
// log(yack(yack(add))(1)(2)(3));
// log(yack(yack(yack(add)(1)))(2)(3));

// log(yack(add)(1)(2)(3, 4, 5));
// var curriedAdd1 = yack(add)(1);
// log(curriedAdd1(2)(3));
// log(curriedAdd1(2)(4));

// var curriedAdd2 = yack(add);
// var curriedAdd3 = curriedAdd2(1);
// log(curriedAdd3(2)(3));
// log(curriedAdd3(2)(4));
// log(curriedAdd2(5)(2)(3));

if (false) {

  assert.equal(yack(add)(1)(2)(3), 6);
  assert.equal(yack(add, 1, 2)(3), 6);
  assert.equal(yack(add)(1, 2)(3), 6);
  assert.equal(yack(add)(1)()()()(2)(3), 6);
  assert.equal(yack(yack(add))(1)(2)(3), 6);
  assert.equal(yack(yack(yack(add)(1)))(2)(3), 6);
  assert.equal(yack(add)(1)(2)(3, 4, 5), 6);

  var curriedAdd1 = yack(add)(1);
  assert.equal(curriedAdd1(2)(3), 6);
  assert.equal(curriedAdd1(2)(4), 7);

  var curriedAdd2 = yack(add);
  var curriedAdd3 = curriedAdd2(1);
  assert.equal(curriedAdd3(2)(3), 6);
  assert.equal(curriedAdd3(2)(4), 7);
  assert.equal(curriedAdd2(5)(2)(3), 10);
  log('test ok...');
}