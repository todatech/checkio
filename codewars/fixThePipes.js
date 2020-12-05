const log = console.log;
const assert = require('assert');

const obj = {
  // 1 - if there is a connection, 0 -  if otherwise
  // order represents top, left, bottom, right.
  9495: [1, 0, 0, 1],
  9491: [0, 1, 1, 0],
  9487: [0, 0, 1, 1],
  9499: [1, 1, 0, 0],

  9473: [0, 1, 0, 1],
  9475: [1, 0, 1, 0],

  9507: [1, 0, 1, 1],
  9515: [1, 1, 1, 0],
  9523: [0, 1, 1, 1],
  9531: [1, 1, 0, 1],

  9547: [1, 1, 1, 1],
  46: [0, 0, 0, 0],
}
/*
┗ - 9495 - BOX DRAWINGS HEAVY UP AND RIGHT
┓ - 9491 - BOX DRAWINGS HEAVY DOWN AND LEFT
┏ - 9487 - BOX DRAWINGS HEAVY DOWN AND RIGHT
┛ - 9499 - BOX DRAWINGS HEAVY UP AND LEFT
━ - 9473 - BOX DRAWINGS HEAVY HORIZONTAL
┃ - 9475 - BOX DRAWINGS HEAVY VERTICAL
┣ - 9507 - BOX DRAWINGS HEAVY VERTICAL AND RIGHT
┫ - 9515 - BOX DRAWINGS HEAVY VERTICAL AND LEFT
┳ - 9523 - BOX DRAWINGS HEAVY DOWN AND HORIZONTAL
┻ - 9531 - BOX DRAWINGS HEAVY UP AND HORIZONTAL
╋ - 9547 - BOX DRAWINGS HEAVY VERTICAL AND HORIZONTAL
*/

function checkPipe(m) {
  m.forEach(r => r.split('').forEach(e => log(e.charCodeAt(0))))
  return true;
}

function display(map) {
  map.forEach(r => log(r))
}

let pipe = [
  '╋━━┓',
  '┃..┃',
  '┛..┣'];
display(pipe);
log(checkPipe(pipe), true);

/*
pipe = [
  '...┏',
  '┃..┃',
  '┛..┣'];
display(pipe);
log(checkPipe(pipe), false);

pipe = [
  '...┏',
  '...┃',
  '┛..┣'];
display(pipe);
log(checkPipe(pipe), false);

pipe = [
  '...┏',
  '...┃',
  '┓..┣'];
display(pipe);
log(checkPipe(pipe), true);

pipe = [
  '╋',
  '╋',
  '╋'];
display(pipe);
log(checkPipe(pipe), true);

pipe = [
  '╋....',
  '┃..┛.',
  '┃....'];
display(pipe);
log(checkPipe(pipe), false);

pipe = [
  '....',
  '.┛┛.',
  '....'];
display(pipe);
log(checkPipe(pipe), true);
*/