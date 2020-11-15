const log = console.log;
const assert = require('assert');


String.prototype.trimLeadingZerosToArray = function () {
  if (this.length === 1) return [+this];
  const temp = this.split('').map(v => +v);
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 0) {
      temp.splice(i, 1);
      i--;
    } else { 
      break; 
    }
  }
  return temp;
}

function multiply(a, b) {

  const x = a.trimLeadingZerosToArray().reverse();
  const y = b.trimLeadingZerosToArray().reverse();

  const len = x.length + y.length + 2
  const arr = new Array(len).fill(0);

  for (let j = 0; j < y.length; j++) {
    for (let i = 0; i < x.length; i++) {
      arr[i + j] += x[i] * y[j];
    }
  }

  for (let z = 0; z < len - 1; z++) {
    const reminder = arr[z] % 10;
    const tens = Math.floor(arr[z] / 10);

    arr[z] = reminder;
    arr[z + 1] += tens;
  }

  const result = arr.reverse().join('').trimLeadingZerosToArray().join('');
  return (result.length) ? result : '0';
}

log(multiply("0000030", "69"))
log(multiply("0999", "0999"))

if (true) {
  assert.equal(multiply("002", "3"), "6");
  assert.equal(multiply("30", "69"), "2070");
  assert.equal(multiply("11", "85"), "935");

  assert.equal(multiply("2", "0"), "0");
  assert.equal(multiply("0", "30"), "0");
  assert.equal(multiply("0000001", "3"), "3");
  assert.equal(multiply("1009", "03"), "3027");

  assert.equal(multiply("98765", "56894"), "5619135910");
  assert.equal(multiply("1020303004875647366210", "2774537626200857473632627613"), "2830869077153280552556547081187254342445169156730");
  assert.equal(multiply("58608473622772837728372827", "7586374672263726736374"), "444625839871840560024489175424316205566214109298");
  assert.equal(multiply("9007199254740991", "9007199254740991"), "81129638414606663681390495662081");

  log('test ok...');
}