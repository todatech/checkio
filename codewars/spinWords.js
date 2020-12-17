const log = console.log;
const assert = require('assert');
const { workerData } = require('worker_threads');

const spinWords = str => str.split(' ')
  .map(word => (word.length > 4) ? word.split('').reverse().join('') : word)
  .join(' ');

log(spinWords("Welcome"), "emocleW");
log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
log(spinWords("This is a test"), "This is a test");
log(spinWords("This is another test"), "This is rehtona test");
log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");