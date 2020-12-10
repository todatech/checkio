const log = console.log;
const assert = require('assert');

function revrot(str, sz) {
  if (sz <= 0 || str === '' || str.length < sz)
    return '';

  const arr = str.match(new RegExp('.{1,' + sz + '}', 'g'))
    .filter(v => v.length === sz)
    .map(chunk => {
      const tmp = chunk.split('');
      const sum = tmp.reduce((k, v) => k += Math.pow(parseInt(v, 10), 3), 0);
      if (sum % 2) {
        // rot left
        tmp.shift(tmp.push(tmp[0]));
        return tmp.join('');
      } else {
        // reverse
        return tmp.reverse().join('');
      }
    });
  return arr.join('');
}

// log(revrot("123456987654", 6), "234561876549");
// log(revrot("123456987653", 6) ,"234561356789");
// log(revrot("66443875", 4) ,"44668753");
// log(revrot("66443875", 8) ,"64438756");
// log(revrot("664438769", 8) ,"67834466");
// log(revrot("123456779", 8) ,"23456771");
// log(revrot("", 8) ,"");
// log(revrot("123456779", 0) ,"");
// log(revrot("563000655734469485", 4) ,"0365065073456944");

// log(revrot("1234", 0), "")
// log(revrot("", 0), "")
// log(revrot("1234", 5), "")
s = "733049910872815764"
log(revrot(s, 5), "330479108928157")
