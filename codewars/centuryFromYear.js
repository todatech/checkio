const log = console.log;
const assert = require('assert');

const century = (year) => Math.floor(year / 100) + ((year % 100) ? 1 : 0);

if (true) {
  log(century(1705), 18, 'Testing for year 1705');
  log(century(1900), 19, 'Testing for year 1900');
  log(century(1601), 17, 'Testing for year 1601');
  log(century(2000), 20, 'Testing for year 2000');
  log(century(89), 1, 'Testing for year 89');
}