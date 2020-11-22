const log = console.log;

function alphabetPosition(text) {

  let arr = [];
  text.toLowerCase().split('').forEach(char => {
    let code = char.charCodeAt(0) - 96;
    if (code >= 1 && code <= 26)
      arr.push(code);
  });

  return arr.join(' ');
}

log(alphabetPosition("The sunset sets at twelve o' clock."), "\n20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
log(alphabetPosition("The narwhal bacons at midnight."), "\n20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");