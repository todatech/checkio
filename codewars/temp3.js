const log = console.log;

var fruits = ["apple","banana","cherry"];
var direction = 1;  // or -1

var i = direction > 0 ? 0 : fruits.length - 1,
    stop = direction > 0 ? fruits.length : -1;
for (; i != stop; i += direction)
    console.log(i, fruits[i]);