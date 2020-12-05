const log = console.log
const assert = require('assert');

function closest(strng) {

  if (!strng.length) { return []; }

  // map and construct a series weight objects
  const weights = strng.split(' ').map((v, i) => {
    const w = v.split('').reduce((k, v) => k += parseInt(v, 10), 0)
    return {
      value: parseInt(v, 10),
      weight: w,
      index: i,
    }
  });

  // find the desired info between all pairs.
  const answer = [];
  for (let i = 0; i < weights.length; i++) {
    for (let j = i + 1; j < weights.length; j++) {

      let obj = {}, v = weights[i], w = weights[j];

      obj['v'] = v;
      obj['w'] = w;
      obj['closest'] = Math.abs(v.weight - w.weight);
      obj['idxSum'] = v.index + w.index;
      obj['minWeight'] = Math.min(v.weight, w.weight);
      answer.push(obj);
    }
  }

  // sort answer by the rules
  answer.sort((a, b) => {
    if (a.closest == b.closest) {
      return (a.minWeight == b.minWeight) ? (a.idxSum - b.idxSum) : (a.minWeight - b.minWeight);
    } else {
      return a.closest - b.closest;
    }
  })

  //Get the first answer and reorganize it.
  const answerPair = [answer[0]['v'], answer[0]['w']];
  answerPair.sort((a, b) => (a.weight == b.weight) ? (a.index - b.index) : (a.weight - b.weight))
  const [v, w] = answerPair;
  return [[v.weight, v.index, v.value], [w.weight, w.index, w.value]];
}




if (true) {
  assert.deepEqual(closest(""), [])
  assert.deepEqual(closest("103 123 4444 99 2000"), [[2, 4, 2000], [4, 0, 103]]);
  assert.deepEqual(closest("80 71 62 53"), [[8, 0, 80], [8, 1, 71]]);
  assert.deepEqual(closest("444 2000 445 544"), [[13, 2, 445], [13, 3, 544]]);
  assert.deepEqual(closest("444 2000 445 644 2001 1002"), [[3, 4, 2001], [3, 5, 1002]]);
  assert.deepEqual(closest("239382 162 254765 182 485944 468751 49780 108 54"), [[9, 1, 162], [9, 7, 108]]);
  assert.deepEqual(closest("54 239382 162 254765 182 485944 468751 49780 108"), [[9, 0, 54], [9, 2, 162]])

  assert.deepEqual(closest("189437 110 263080 175 55764 13 257647 53 486111 27 66"), [[8, 7, 53], [9, 9, 27]]);
  assert.deepEqual(closest("28706 196 419018 130 49183 124 421208 174 404307 60 24"), [[6, 9, 60], [6, 10, 24]]);
  assert.deepEqual(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38"), [[11, 5, 119], [11, 9, 128]]);
  assert.deepEqual(closest("89998 187 126159 175 338292 89 39962 145 394230 167 1"), [[13, 3, 175], [14, 9, 167]]);
  assert.deepEqual(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54"), [[8, 5, 134], [8, 7, 62]]);
  assert.deepEqual(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"), [[13, 9, 85], [14, 3, 176]]);
  assert.deepEqual(closest("241259 154 155206 194 180502 147 300751 200 406683 37 57"), [[10, 1, 154], [10, 9, 37]]);
  assert.deepEqual(closest("462835 148 467467 128 183193 139 220167 116 263183 41 52"), [[13, 1, 148], [13, 5, 139]]);
  assert.deepEqual(closest("79257 160 44641 146 386224 147 313622 117 259947 155 58"), [[11, 3, 146], [11, 9, 155]]);
  assert.deepEqual(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59"), [[15, 0, 315411], [15, 3, 87]]);
  log('test ok...');
}
