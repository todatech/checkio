const log = console.log;

var gcd = function (a, b) {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
}




let a = [2, 6, 14, 2, 6];
let b = [2, 6];
let c = [6, 12];


log(gcd2(a))


function defaultArguments(func, params) {
  let a = func.toString();
  log('a: ', a);
  let re = new RegExp(/(?:function ([\w]*)\((.+?)\))/);
  let m = a.match(re);
  let argNames;
  if (m !== null) {
    log('m: ', m);
    log('m2: ', m[2]);
    argNames = m[2].split(',').map(v => v.trim());
  }


  let defaultArgs = {};
  // for (let [i, v] of argNames.entries()) {
  for (let [i, v] of Object.entries(params)) {
    log('i: ', i, 'v: ', v);
    defaultArgs[v] = params[v];
  }
  log('defaultArgs: ', defaultArgs)

  return function () {
    let args = [];
    if (argNames !== undefined){
      for (let [i, v] of argNames.entries()) {
        log('i: ', i, 'v: ', v);
        args[i] = arguments[i] ?? defaultArgs[v];
      }
    } else {
      for(let i = 0; i<arguments.length; i++) {
        args[i] = arguments[i];
      }
    }
    log(args);
    return func.call(this, ...args);
  };
}
