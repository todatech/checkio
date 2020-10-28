const assert = require('assert');
const log = console.log;

function closest(strng) {

  if (!strng.length) { return []; }

  // generate weight list (wlst) and sort by weight
  const wlst = strng.slice().trim().split(' ').map((val, idx) => {
    const weight = val.split('').reduce((a, b) => (a += +b), 0)
    return [weight, idx, +val];
  }).sort((a, b) => a[0] - b[0]);

  // calculate the closet value for each target from list
  // return the one value that is closet in the format of [closestVal, id, num]
  function findClosestVal(target, list) {
    const closestValList = list.map(val => [Math.abs(target[0] - val[0]), val[1], val[2]])
      .sort((a, b) => (a[0] == b[0]) ? (a[1] - b[1]) : (a[0] - b[0]));
    return closestValList[0];
  }

  // keep a list of result pairs [[ weight, closestValList ], ... ]
  const result = [];
  wlst.forEach((weight, idx) => {
    // take out the test val from the weight list
    const testList = wlst.slice();
    testList.splice(idx, 1);

    const closestVal = findClosestVal(weight, testList);
    result.push([weight, closestVal]);
  })

  // sort the values by the requirement set forth in exercise
  result.sort((a, b) => {
    if (a[1][0] == b[1][0]) {         // sort by closetVal in 2nd array 1st element closestVal -> smallest weight difference
      if (a[0][0] == b[0][0]) {       // then by 2nd array, 2nd element id of closest Element -> smallest weight
        return (a[0][1] - b[0][1]);   // finally by weight of our target -> smallest index
      } else {
        return (a[0][0] - b[0][0])
      }
    } else {
      return (a[1][0] - b[1][0])
    }
  })

  // output the first line from result in proper format
  const ids = [result[0][0][1], result[0][1][1]]

  // these lines are added because server sorted answer differently
  return wlst.filter(val => ids.includes(val[1]))
    .sort((a, b) => (a[0] == b[0]) ? (a[1] - b[1]) : (a[0] - b[0]));
}

// the smallest difference of weights ie that are the closest
// with the smallest weights
// and with the smallest indices(or ranks, numbered from 0) in strng

// log(closest("103 123 4444 99 2000"))
// log(closest("80 71 62 53"))
// log(closest("444 2000 445 544"))
// log(closest("444 2000 445 644 2001 1002"))
// log(closest("239382 162 254765 182 485944 468751 49780 108 54"))
// log(closest("54 239382 162 254765 182 485944 468751 49780 108"))

// log(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52")) //, [[13, 9, 85], [14, 3, 176]]);
// log(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54")) //, [[8, 5, 134], [8, 7, 62]]);
// log(closest("241259 154 155206 194 180502 147 300751 200 406683 37 57")) //, [[10, 1, 154], [10, 9, 37]]);
// log(closest("89998 187 126159 175 338292 89 39962 145 394230 167 1")) //, [[13, 3, 175], [14, 9, 167]]);
// log(closest("462835 148 467467 128 183193 139 220167 116 263183 41 52")) //, [[13, 1, 148], [13, 5, 139]]);

// log(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38")) //, [[11, 5, 119], [11, 9, 128]]);
// log(closest("28706 196 419018 130 49183 124 421208 174 404307 60 24")) //, [[6, 9, 60], [6, 10, 24]]);
// log(closest("189437 110 263080 175 55764 13 257647 53 486111 27 66")) //, [[8, 7, 53], [9, 9, 27]]);
// log(closest("79257 160 44641 146 386224 147 313622 117 259947 155 58")) //, [[11, 3, 146], [11, 9, 155]]);
// log(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59")) //, [[15, 0, 315411], [15, 3, 87]]);




if (true) {
  assert.deepEqual(closest(""), [])
  assert.deepEqual(closest("456899 50 11992 176 272293 163 389128 96 290193 85 52"), [[13, 9, 85], [14, 3, 176]]);
  assert.deepEqual(closest("239382 162 254765 182 485944 134 468751 62 49780 108 54"), [[8, 5, 134], [8, 7, 62]]);
  assert.deepEqual(closest("241259 154 155206 194 180502 147 300751 200 406683 37 57"), [[10, 1, 154], [10, 9, 37]]);
  assert.deepEqual(closest("89998 187 126159 175 338292 89 39962 145 394230 167 1"), [[13, 3, 175], [14, 9, 167]]);
  assert.deepEqual(closest("462835 148 467467 128 183193 139 220167 116 263183 41 52"), [[13, 1, 148], [13, 5, 139]]);

  assert.deepEqual(closest("403749 18 278325 97 304194 119 58359 165 144403 128 38"), [[11, 5, 119], [11, 9, 128]]);
  assert.deepEqual(closest("28706 196 419018 130 49183 124 421208 174 404307 60 24"), [[6, 9, 60], [6, 10, 24]]);
  assert.deepEqual(closest("189437 110 263080 175 55764 13 257647 53 486111 27 66"), [[8, 7, 53], [9, 9, 27]]);
  assert.deepEqual(closest("79257 160 44641 146 386224 147 313622 117 259947 155 58"), [[11, 3, 146], [11, 9, 155]]);
  assert.deepEqual(closest("315411 165 53195 87 318638 107 416122 121 375312 193 59"), [[15, 0, 315411], [15, 3, 87]]);
  log('test ok.')
}
/*

[number-weight, index in strng of the corresponding number, original corresponding number instrng]

//num  103, 123, 4444, 99, 2000
//idx    0,   1,    2,  3,    4
//weg    4,   6,   16, 18,    2
//dWM    2,   4,   14, 16,    0
//sum    2,   5,   16, 19,    4

strng = "103 123 4444 99 2000"
the weights are 4, 6, 16, 18, 2(ie 2, 4, 6, 16, 18)

closest should return [[2, 4, 2000], [4, 0, 103]](or([2, 4, 2000], [4, 0, 103])
or[{ 2, 4, 2000}, { 4, 0, 103}] or ...depending on the language)
because 2000 and 103 have for weight 2 and 4, their indexes in strng are 4 and 0.
The smallest difference is 2.
4(for 103) and 6(for 123) have a difference of 2 too but they are not
the smallest ones with a difference of 2 between their weights.
....................

//num  80, 71, 62, 53
//idx   0,  1,  2,  3
//weg   8,  8,  8,  8
//dWM   0,  0,  0,  0
//sum   0,  1,  2,  3

strng = "80 71 62 53"
All the weights are 8.
closest should return [[8, 0, 80], [8, 1, 71]]
71 and 62 have also:
- the smallest weights(which is 8 for all)
    - the smallest difference of weights(which is 0 for all pairs)
    - but not the smallest indices in strng.
....................

//num 444, 2000, 445, 544
//idx   0,    1,   2,   3
//weg  12,    2,  13,  13
//dWM  10,    0,  11,  11
//sum  10,    1,  13,  14

strng = "444 2000 445 544"
the weights are 12, 2, 13, 13(ie 2, 12, 13, 13)

closest should return [[13, 2, 445], [13, 3, 544]] or([13, 2, 445], [13, 3, 544])
or[{ 13, 2, 445}, { 13, 3, 544}] or ...
444 and 2000 have the smallest weights(12 and 2) but not the smallest difference of weights;
they are not the closest.
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("444 2000 445 644 2001 1002")-- > [[3, 4, 2001], [3, 5, 1002]] or([3, 4, 2001],
    [3, 5, 1002]]) or[{ 3, 4, 2001}, { 3, 5, 1002}] or ...
Here the smallest difference is 0 and in the result the indexes are in ascending order.
...................

closest("239382 162 254765 182 485944 468751 49780 108 54")
The weights are: 27, 9, 29, 11, 34, 31, 28, 9, 9.
closest should return [[9, 1, 162], [9, 7, 108]] or([9, 1, 162], [9, 7, 108])
or[{ 9, 1, 162}, { 9, 7, 108}] or ...
108 and 54 have the smallest difference of weights too, they also have
the smallest weights but they don't have the smallest ranks in the original string.
..................

closest("54 239382 162 254765 182 485944 468751 49780 108")
closest should return [[9, 0, 54], [9, 2, 162]] or([9, 0, 54], [9, 2, 162])
or[{ 9, 0, 54}, { 9, 2, 162}] or ...

*/



// old code

  // const result = []
  // for (let i = 0; i < list.length - 1; i++) {
  //   let closestVal = Math.abs(target[0] - list[i][0]) +
  //     Math.abs(target[1] - list[i][1]);



  //   let weightMin = Math.min(wlst[i][0], wlst[i + 1][0])
  //   result.push([closestCalc, weightMin, wlst[i][1], wlst[i + 1][1], wlst[i][2], wlst[i + 1][2]]);
  // }
  // result.sort((a, b) => (a[0] - b[0]));
  // return
  // }


  //   // calculate the weight difference and sort ascending by result
  //   const result = []
  //   for (let i = 0; i < wlst.length - 1; i++) {
  //     let closestCalc = Math.abs(wlst[i + 1][0] - wlst[i][0]) +
  //       Math.abs(wlst[i + 1][1] - wlst[i + 1][1]);
  //     let weightMin = Math.min(wlst[i][0], wlst[i + 1][0])
  //     result.push([closestCalc, weightMin, wlst[i][1], wlst[i + 1][1], wlst[i][2], wlst[i + 1][2]]);
  //   }
  //   result.sort((a, b) => (a[0] - b[0]));

  //   // output the first line from result in proper format
  //   const ids = [result[0][2], result[0][3]]

  //   // these lines are added because server sorted answer differently
  //   return wlst.filter(val => ids.includes(val[1]))
  //     .sort((a, b) => (a[0] == b[0]) ? (a[1] - b[1]) : (a[0] - b[0]));