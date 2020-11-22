const log = console.log;
const assert = require('assert');

const list = (names) => names.reduce((acc, obj, idx, arr) =>
  (idx === 0) ? obj.name : ((idx !== arr.length - 1) ? acc.concat(', ', obj.name) : acc.concat(' & ', obj.name))
  , '');

  // {
  //   if (idx === 0) {
  //     acc = obj.name;
  //   } else if (idx === arr.length - 1) {
  //     acc = acc.concat(' & ', obj.name);
  //   } else {
  //     acc = acc.concat(', ', obj.name);
  //   }
  //   return acc;
  // }

log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));

log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
log(list([{ name: 'Bart' }, { name: 'Lisa' }]))
log(list([{ name: 'Bart' }]))
log(list([]), '')


if (true) {
  assert.equal(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names")
  assert.equal(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
    "Must work with many names")
  assert.equal(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
    "Must work with two names")
  assert.equal(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name")
  assert.equal(list([]), '', "Must work with no names")
  log('test ok...')
}