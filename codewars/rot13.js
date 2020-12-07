const log = console.log;
const assert = require('assert');

function rot13(message) {
  const re = new RegExp(/[a-z]/, 'i');
  return message.split('').map(v => {
    let c = v.charCodeAt(0) + 13;
    return (re.test(v)) ?
      String.fromCharCode(
        (v === v.toUpperCase()) ?
          ((c > 90) ? c - 26 : c) :  //A=65, Z=90
          ((c > 122) ? c - 26 : c)   //a=97, z=122
      ) :
      v;
  }).join('');
}


log("grfg", rot13("test"))
log("Grfg", rot13("Test"))
