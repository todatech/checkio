#!/usr/bin/env checkio --domain=py run three-points-circle

# Nicola discovered a caliper inside a set of drafting tools he received as a gift.    Seeing the caliper, he has decided to learn how to use it.
# 
# Through any three points that do not exist on the same line, there lies a unique circle.    The points of this circle are represented in a string with the coordinates like so:
# 
# 
#     "(x1,y1),(x2,y2),(x3,y3)"
# 
# Wherex1,y1,x2,y2,x3,y3are digits.
# 
# You should find the circle for three given points, such    that the circle lies through these point and return the result as a string    with the equation of the circle.    In a Cartesian coordinate system (with an X and Y axis),    the circle with central coordinates of (x0,y0) and radius of r can be described with the following equation:
# 
# 
#     "(x-x0)^2+(y-y0)^2=r^2"
# 
# wherex0,y0,rare decimal numbers rounded totwo decimal points.    Remove extraneous zeros and all decimal points, they are not necessary.    For rounding, use the standard mathematical rules.
# 
# 
# 
# Input:Coordinates as a string..
# 
# Output:The equation of the circle as a string.
# 
# Precondition:All three given points do not lie on one line.
# 0 < xi, yi, r < 10
# 
# 
# END_DESC

from ast import literal_eval
import math


def properties_of_segment(p1, p2):

    x0 = (p1[0]+p2[0])/2
    y0 = (p1[1]+p2[1])/2

    mid_point = (x0, y0)
    numerator = (p2[1]-p1[1])
    denominator = (p2[0]-p1[0])

    # slope -> num/den, slope_perpendicular_line = -den/num
    if numerator == 0:
        mp = math.inf
    else:
        mp = -denominator/numerator
    return mid_point, mp


def finding_center(p1, p2, m1, m2):
    x = ((p2[1]-p1[1]) - m2 * p2[0] + m1 * p1[0]) / (m1 - m2)
    y = m1 * x - m1 * p1[0] + p1[1]
    c = (x, y)
    return c


def checkio(data):

    d1 = literal_eval(data)
    p, q, r = d1

    # seg pq, qr, rp
    mp_pq, m_pq = properties_of_segment(p, q)
    mp_qr, m_qr = properties_of_segment(q, r)
    mp_rp, m_rp = properties_of_segment(r, p)

    # print("mp_pq: ", mp_pq, ", m_pq: ", m_pq)
    # print("mp_qr: ", mp_qr, ", m_qr: ", m_qr)
    # print("mp_rp: ", mp_rp, ", m_rp: ", m_rp)

    c1 = finding_center(mp_pq, mp_qr, m_pq, m_qr)
    c2 = finding_center(mp_qr, mp_rp, m_qr, m_rp)
    c3 = finding_center(mp_rp, mp_pq, m_rp, m_pq)

    # print("c1: ", c1, ", c2: ", c2, ", c3: ", c3)

    center = ()
    for c in c1, c2, c3:
        x, y = c
        if not math.isnan(x) and not math.isnan(y):
            center = c
            break
    # print("ans center: ", center)

    c = center
    r_sq = math.sqrt((p[0]-c[0])**2.0 + (p[1]-c[1])**2.0)
    # print("r^2: ", r_sq)

    x_str = '{0:+.2f}'.format(-c[0]).rstrip('0').rstrip('.')
    y_str = '{0:+.2f}'.format(-c[1]).rstrip('0').rstrip('.')
    r_str = '{0:.2f}'.format(r_sq).rstrip('0').rstrip('.')

    ans = '(x' + x_str + ')^2+(y' + y_str + ')^2=' + r_str + '^2'
    print(ans)

    return ans


if __name__ == '__main__':

    checkio("(2,1),(0,5),(-1,2)")
    checkio("(2,2),(6,2),(2,6)")
    checkio("(3,7),(6,9),(9,7)")

    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio("(2,2),(6,2),(2,6)") == "(x-4)^2+(y-4)^2=2.83^2"
    assert checkio("(3,7),(6,9),(9,7)") == "(x-6)^2+(y-5.75)^2=3.25^2"