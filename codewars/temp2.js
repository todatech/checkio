id:0 - 1,2,3,4
id:1 - 1,2,4,3
id:2 - 1,3,2,4
id:3 - 1,3,4,2
id:4 - 1,4,2,3
id:5 - 1,4,3,2
id:6 - 2,1,3,4
id:7 - 2,1,4,3
id:8 - 2,3,1,4
id:9 - 2,3,4,1
id:10 - 2,4,1,3
id:11 - 2,4,3,1
id:12 - 3,1,2,4
id:13 - 3,1,4,2
id:14 - 3,2,1,4
id:15 - 3,2,4,1
id:16 - 3,4,1,2
id:17 - 3,4,2,1
id:18 - 4,1,2,3
id:19 - 4,1,3,2
id:20 - 4,2,1,3
id:21 - 4,2,3,1
id:22 - 4,3,1,2
id:23 - 4,3,2,1

Answer: 
[2, 3, 1, 4],
[3, 2, 4, 1],
[1, 4, 2, 3],
[4, 1, 3, 2]

hints of a:  [
    3, 2, 2, 1, 1, 2,
    2, 3, 3, 2, 2, 1,
    1, 2, 2, 3
  ]

  matrix:  [ 2, 13, 10, 21 ]
  matrix:  [ 2, 15, 10, 19 ]
  matrix:  [ 2, 16, 7, 21 ]
  matrix:  [ 6, 4, 15, 22 ]
  matrix:  [ 8, 13, 4, 21 ]
  matrix:  [ 8, 15, 4, 19 ]



  [ 2, 6, 8 ],
[ 4, 7, 10, 13, 15, 16 ],
[ 4, 7, 10, 13, 15, 16 ],
[ 19, 21, 22 ]


8, 15, 4, 19





[
  { lhint: 4, rhint: 1, idx: 0, val: [ 1, 2, 3, 4 ] },
  { lhint: 3, rhint: 2, idx: 1, val: [ 1, 2, 4, 3 ] },
  { lhint: 3, rhint: 2, idx: 3, val: [ 1, 3, 4, 2 ] },
  { lhint: 3, rhint: 2, idx: 9, val: [ 2, 3, 4, 1 ] },
  { lhint: 3, rhint: 1, idx: 2, val: [ 1, 3, 2, 4 ] },
  { lhint: 3, rhint: 1, idx: 6, val: [ 2, 1, 3, 4 ] },
  { lhint: 3, rhint: 1, idx: 8, val: [ 2, 3, 1, 4 ] },
  { lhint: 2, rhint: 3, idx: 5, val: [ 1, 4, 3, 2 ] },
  { lhint: 2, rhint: 3, idx: 11, val: [ 2, 4, 3, 1 ] },
  { lhint: 2, rhint: 3, idx: 17, val: [ 3, 4, 2, 1 ] },
  { lhint: 2, rhint: 2, idx: 4, val: [ 1, 4, 2, 3 ] },
  { lhint: 2, rhint: 2, idx: 7, val: [ 2, 1, 4, 3 ] },
  { lhint: 2, rhint: 2, idx: 10, val: [ 2, 4, 1, 3 ] },
  { lhint: 2, rhint: 2, idx: 13, val: [ 3, 1, 4, 2 ] },
  { lhint: 2, rhint: 2, idx: 15, val: [ 3, 2, 4, 1 ] },
  { lhint: 2, rhint: 2, idx: 16, val: [ 3, 4, 1, 2 ] },
  { lhint: 2, rhint: 1, idx: 12, val: [ 3, 1, 2, 4 ] },
  { lhint: 2, rhint: 1, idx: 14, val: [ 3, 2, 1, 4 ] },
  { lhint: 1, rhint: 4, idx: 23, val: [ 4, 3, 2, 1 ] },
  { lhint: 1, rhint: 3, idx: 19, val: [ 4, 1, 3, 2 ] },
  { lhint: 1, rhint: 3, idx: 21, val: [ 4, 2, 3, 1 ] },
  { lhint: 1, rhint: 3, idx: 22, val: [ 4, 3, 1, 2 ] },
  { lhint: 1, rhint: 2, idx: 18, val: [ 4, 1, 2, 3 ] },
  { lhint: 1, rhint: 2, idx: 20, val: [ 4, 2, 1, 3 ] }
]