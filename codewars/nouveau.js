const assert = require('assert');
const log = console.log;

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function () {
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = new Person('John', 30);
log('John: ', john);
var jack = new Person('Jack', 40);
log('Jack: ', jack);
// console.log(john.introduce()); // My name is John and I am 30
// console.log(jack.introduce()); // My name is Jack and I am 40

function ReturnsArray(name) {
  this.name = name;
  return [1, 2, 3];
}
// var arr = new ReturnsArray('arr?');
// console.log('arr.name: ', arr.name ); // undefined
// console.log('arr: ', arr ); // [1, 2, 3]
// var arr2 = nouveau(ReturnsArray,'arr?');
// console.log('arr2.name: ', arr2.name ); // undefined
// console.log('arr2: ', arr2 ); // [1, 2, 3]

function nouveau(func, ...args) {

  const obj = {};
  obj.__proto__ = func.prototype;

  const val = func.apply(obj, args);
  return (typeof (val) === 'object' || typeof (val) === 'function') ?
   ((val) ? val : obj) : obj;
}


var john1 = nouveau(Person, 'John', 30); // same result as above
log('john1: ', john1);
log(john1.introduce());
log(nouveau(Person, 'Johnny', 31));




if (false) {
  var guy = nouveau(Person, 'Guy');

  assert.equal(guy.name, 'Guy');
  assert.equal(guy.sayHi(), 'Hi, I am Guy');

  log('test ok.')
}