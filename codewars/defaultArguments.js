const assert = require('assert');

const log = console.log;
const defaultArgs = new Map();

const re = new RegExp(/(?:function ([\w]*)\((.+?)\))/, 's');  //  matching param brackets
const re2 = new RegExp(/\/\*(.|\n)*?\*\//);                   // removing /**/ comments
const re3 = new RegExp(/\/\/.*/);                             // removing // comments

function defaultArguments(func, params) {

  if (func.name !== 'wrapper') {
    // if entering func for the first time, we analyze the param names.
    const m = func.toString().match(re);
    let argNames;
    if (m !== null) {
      let str = m[2];
      str = str.replace(re2, '');
      str = str.replace(re3, '');
      argNames = str.split(',').map(v => v.trim());
    }

    // we will map param names, and since map objects have a special property
    // that keeps insert order, we will use this.
    defaultArgs.clear();
    if (argNames !== undefined) {
      for (const v of argNames) {
        defaultArgs.set(v);
      }
    }

    // match params keys to defaultArgs Map 
    for (let [key, val] of Object.entries(params)) {
      if (defaultArgs.has(key)) {
        defaultArgs.set(key, val);
      }
    }

    return function wrapper() {
      let argsOut = [...defaultArgs.values()];
      let argsIn = Array.from(arguments);
      let nLen = argsIn.length
      for (let i = 0; i < argsOut.length; i++) {
        if (i < nLen && nLen > 0) {
          argsOut[i] = argsIn[i];
        }
      }
      return func(...argsOut);
    }
  } else {
    // we will update the wrapper with the new params passing in.
    const oldKeys = [...defaultArgs.keys()];
    defaultArgs.clear();
    for (let i = 0; i < oldKeys.length; i++) {
      defaultArgs.set(oldKeys[i]);
    }

    for (let [key, val] of Object.entries(params)) {
      if (defaultArgs.has(key)) {
        defaultArgs.set(key, val);
      }
    }
    return func;
  }
}

// function add(a, b) { return a + b; }
// function addComments( a, // comments
//   b /* more comments */ ) { return a+b; }


// var add_ = defaultArguments(add, { b: 9 });
// log(add_(10), 19);
// log(add_(10, 5), 15);
// log(add_(), NaN);

// add_ = defaultArguments(add_, { b: 3, a: 2 });
// log(add_(10), 13);
// log(add_(), 5);

// add_ = defaultArguments(add_, { b: 3 });
// log(add_(10), 13);

// // doesn't do anything, since c isn't an argument
// add_ = defaultArguments(add_, { c: 3 });
// log(add_(10), NaN);
// log(add_(10, 10), 20);

// var addComments_ = defaultArguments(addComments, { b: 9 });
// log(addComments_(10), 19);
// log('test ok...');

// var id = function (_id) { return _id; }
// log(defaultArguments(id,{id:"test"})(undefined));
// log(asdf(undefined))

var id = function (_id) { return _id; }
log(defaultArguments(id, { id: "test" })(), 'test');
log(defaultArguments(id, { id: "test" })(undefined), undefined);
// "test", 'defaultArguments(id,{id:"test"})()');