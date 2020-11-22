const log = console.log;
const assert = require('assert');

const filter_list = (l) => l.filter(v => (typeof v === 'number'));

log(filter_list([1, 2, 'a', 'b']))
log(filter_list([1, 'a', 'b', 0, 15]))
log(filter_list([1, 2, 'aasf', '1', '123', 123]))

if (false) {
}