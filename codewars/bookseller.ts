// const assert = require('assert');
// const log = console.log;

function stockList(listOfArt : string[], listOfCat: string[]) {

  const re = new RegExp(/^([\w])(?:.+? )(\d+?)$/)

  const filteredArt = listOfArt.filter(list => {
    const match = list.match(re);
    return (match)? listOfCat.includes(match[1]): false;
  })

  let resultObj: {[key:string]: number} = {};
  if (filteredArt.length !== 0) {
    resultObj = filteredArt.reduce((acc: {[key:string]: number}, val) => {
      const match = val.match(re);
      if (match) {
        acc.hasOwnProperty(match[1]) ? acc[match[1]] += parseInt(match[2]) : acc[match[1]] = parseInt(match[2]);
      }
      return acc;
    }, {})
  }

  
  let numOfListedCat = listOfCat.length;
  return listOfCat.map(val => resultObj.hasOwnProperty(val) ? [val, resultObj[val]] : [val, 0])
    .reduce((acc, val, idx) => {
      let entry = `(${val[0]} : ${val[1]})`;
      (idx != (numOfListedCat - 1)) ? acc += entry + ' - ' : acc += entry;
      return acc;
    }, '')

}

// let b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
// let c = ["A", "B"]
b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
// c = ["A", "B", "C", "W"]
c = ['W', 'X', 'Y', 'Z'];

log(stockList(b, c));

if (false) {
  assert.equal(stockList("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");

  log('test ok.')

  // b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
  // c = ["A", "B"]
  // res = "(A : 200) - (B : 1140)"
  // Test.assertEquals(stockList(b, c), res)

  // b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
  // c = ["A", "B", "C", "W"]
  // res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
  // Test.assertEquals(stockList(b, c), res)
}
