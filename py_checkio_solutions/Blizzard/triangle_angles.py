#!/usr/bin/env checkio --domain=py run triangle-angles

# You are given the lengths for each side on a triangle.    You need to find all three angles for this triangle.    If the given side lengths cannot form a triangle (or form a degenerated triangle),    then you must return all angles as 0 (zero).    The angles should be represented as a list of integers inascending order.    Each angle is measured in degrees and rounded to the nearest integer number (Standard mathematical rounding).
# 
# 
# 
# Input:The lengths of the sides of a triangle as integers.
# 
# Output:Angles of a triangle in degrees as sorted list of integers.
# 
# Precondition:
# 0 < a,b,c ≤ 1000
# 
# 
# END_DESC

from typing import List
import math


def checkio(a: int, b: int, c: int) -> List[int]:

    if (a+b <= c) or (b+c <= a) or (c+a <= b):
        return [0, 0, 0]

    angle_a = math.acos((b**2+c**2-a**2)/(2*b*c)) / math.pi * 180
    angle_b = math.acos((a**2+c**2-b**2)/(2*a*c)) / math.pi * 180
    angle_c = math.acos((a**2+b**2-c**2)/(2*a*b)) / math.pi * 180
    # print('a: {}, b: {}, c: {}'.format(angle_a, angle_b, angle_c))
    li = [angle_a, angle_b, angle_c]
    ans_int = [int(round(x)) for x in li]
    ans = sorted(ans_int)

    # print(ans)
    return ans


if __name__ == '__main__':

    # These "asserts" using only for self-checking and not necessary for auto-testing
    print("Example:")
    print(checkio(4, 4, 4))
    # print(checkio(3, 4, 5))
    # print(checkio(2, 2, 5))

    assert checkio(4, 4, 4) == [60, 60, 60], "All sides are equal"
    assert checkio(3, 4, 5) == [37, 53, 90], "Egyptian triangle"
    assert checkio(2, 2, 5) == [0, 0, 0], "It's can not be a triangle"
    print("Coding complete? Click 'Check' to earn cool rewards!")