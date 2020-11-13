const log = console.log;

function curry(f) {
    return function(a) {
        return function (b) {
            return f(a,b);
        }
    }
}

function sum(a,b) {
    return a+b;
}

let curriedSum = curry(sum);

log(curriedSum(1))


  Example - curry
  function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };  
  }



  return function curried(...args) {
    if (args.length >= fn.length) {
      myArgs.push(args);
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        // return curried.apply(this, args.concat(args2));
        return function (args) {
          myArgs.push(args);
          log('myArgs: ', myArgs);
        }
      }
    }
  };

  // let me = new Function('me','return me');

  // return function curried(...args) {
  //   return function(a) {
  //     return function() {
  //       log(a);
  //       myArgs.push(a);
  //     }
  //   }
  // }
  // return me


//   const add = function(a) {
//     return function(b) {
//         return a+b;
//     }
//   }
//   log(add(1)(2))
