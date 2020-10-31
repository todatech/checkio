#!/usr/bin/env checkio --domain=py run searchlights

# How many vertices ofthe regular polygonscan you see in the light?
# 
# You are given two lists as input values    (a list of the regular polygons and a list of the circles.)
# 
# Detail of the regular polygon (as a tuple of 4 integers):
# 
# x coordinate of the top vertex.y coordinate of the top vertex.The length of an edge.The number of vertices.Detail of the circle (as a tuple of 3 integers):
# 
# x coordinate of the center.y coordinate of the center.The length of the radius.You have to return the number of vertices in the circles.
# 
# NOTE:
# 
# The Regular polygons is vertical symmetry.Don't count vertices with negative coordinates. (e.g. (-1, 2), (2, -3), (-3, -4))No test case where the circumference is close to the vertices.
# END_DESC

def searchlights(polygons, lights):

    # your code here
    return 0


if __name__ == '__main__':
    print("Example:")
    print (searchlights([(2, 3, 2, 3)], [(1, 2, 1)]))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert(searchlights([(2, 3, 2, 3)], [(1, 2, 1)])) == 1, 'regular triangle'
    assert(searchlights([(4, 5, 2, 4)], [(4, 4, 3)])) == 4, 'square'
    assert(searchlights([(6, 7, 2, 5)], [(2, 3, 2)])) == 0, 'regular pentagon'
    assert(searchlights([(4, 2, 2, 6)], [(4, 2, 3)])) == 3, 'regular hexagon'
    assert(searchlights([(1, 7, 2, 8)], [(0, 5, 4)])) == 5, 'regular octagon'
    print("Coding complete? Click 'Check' to earn cool rewards!")