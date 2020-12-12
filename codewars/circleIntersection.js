let log = console.log;
let assert = require('assert');


// This is not complete, required less then 94 characters but I can only achieve 130+
// search for Circular segment to finish this exercise
// also check this out https://math.stackexchange.com/questions/402858/area-of-intersection-between-two-circles
// and also https://stackoverflow.com/questions/596467/how-do-i-convert-a-float-number-to-a-whole-number-in-javascript
//
//
// case 1 - infinite intersection A = B, ra = rb
// case 2 - 0 intersection i.e. if d > ra + rb, then
//          no inter. d = sqrt( (xb - xa)^2 + (yb - ya)^2)
// case 3 - intersection creates 2 pts
//          e1 = 1/d * [(xb - xa), (yb- ya)]
//          e2 = [[0, -1], [1, 0]] * e1
//          p = A + x*e1 +/- y*e2
//          x = 1/2d * (ra^2 - rb^2 + d^2);
//          y = sqrt(Ra^2 - x^2)
// case 4 - one inside the other
//          d < |Rb - Ra|
// https://www.xarg.org/2016/07/calculate-the-intersection-points-of-two-circles/
//
// For this task, since the circle are congruent with same R, we can simplify
// the above cases
// case 1 - we check infinite intersections, where pA = pB
// case 2 - check 2r <= d = sqrt( (xb - xa)^2 + (yb - ya)^2)
// case 3 - d = sqrt( (xb - xa)^2 + (yb - ya)^2)
//          x =  d/2
//          y = sqrt(ra^2 - d^2/4)
// case 4 - won't happen since ra = rb

// https://www.xarg.org/2016/07/calculate-the-intersection-area-of-two-circles/
// area = ra^2*asin(y/ra) + rb^2*asin(y/rb) - y* (x + sqrt(rb^2 - ra^2 + x^2))
//      = 2r^2*asin(y/r) - y*2x;, and x = d/2
//      = 2r^2*asin(y/r) - y*d;
// let a = 
// `
circleIntersection=([m,n],[o,p],r)=>(y=((R=r*r)-(e=(a=o-m)*a+(b=p-n)*b)/4)**.5)?(a||b?(f=e**.5)>2*r?0:2*R*Math.asin(y/r)-f*y:R*3.14)|0:0
// `
// log(a.length)

// circleIntersection2=([m,n],[o,p],r)=>{
//   d=u(t(o-m)+t(p-n))
//   y = u(r*r - d*d/4)
//   theta = 2*Math.asin(y/r);
//   log('theta: ', theta);
//   area = r*r*(theta-Math.sin(theta))
//   log(area);
//   // return 2*r*r*Math.asin(y/r)- d*y;
// }
// log(circleIntersection2([10, 20], [-5, -15], 20), 15)
log(circleIntersection([10, 20], [-5, -15], 20), 15)
log(circleIntersection([0, 0], [7, 0], 5), 14)

log(circleIntersection([0, 0], [7, 0], 5), 14)
log(circleIntersection([10, 20], [-5, -15], 20), 15)
log(circleIntersection([-7, 13], [-25, -5], 17), 132)
log(circleIntersection([38, -18], [46, -29], 10), 64)
log(circleIntersection([-29, 33], [-8, 13], 15), 5)
log(circleIntersection([0, 0], [0, 10], 10), 122)

// // case 1
log(circleIntersection([5, 6], [5, 6], 3), 28)

// // case 2
log(circleIntersection([-20, -4], [-40, 29], 7), 0)
log(circleIntersection([-5, 0], [5, 0], 3), 0)
log(circleIntersection([-12, 20], [43, -49], 23), 0)