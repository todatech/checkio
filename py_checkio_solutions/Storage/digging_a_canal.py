#!/usr/bin/env checkio --domain=py run digging-a-canal

# The robots are trying to colonize a new island.    There are many rivers on this island and it would be good idea for them to use ships designed for water,    rather than their spaceships.    Some of the territories do not have a river for transportation from one edge of a field to another.    The robots can dig a canal and convert the land to water if need be.    We must explore a field map and count the minimum number of cells necessary for a canal    that would allow the robots to sail from northern edge of the map to southern edge.    The map is in a 2D array, where 0 is water, 1 is land. Cells are connected by their edges.
# 
# 
# 
# Input:A map as a list of lists with 1 or 0.
# 
# Output:The minimum number of cells necessary for a canal as an integer.
# 
# Precondition:0 < len(land_map) < 10
# all(0 < len(row) < 10 for row in land_map)
# 
# 
# 
# END_DESC

from typing import List

def checkio(land_map: List[List[int]]) -> int:

    return 0

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    print("Example:")
    print(checkio([[1, 1, 1, 1, 0, 1, 1],
                   [1, 1, 1, 1, 0, 0, 1],
                   [1, 1, 1, 1, 1, 0, 1],
                   [1, 1, 0, 1, 1, 0, 1],
                   [1, 1, 0, 1, 1, 1, 1],
                   [1, 0, 0, 1, 1, 1, 1],
                   [1, 0, 1, 1, 1, 1, 1]]))

    assert checkio([[1, 1, 1, 1, 0, 1, 1],
                    [1, 1, 1, 1, 0, 0, 1],
                    [1, 1, 1, 1, 1, 0, 1],
                    [1, 1, 0, 1, 1, 0, 1],
                    [1, 1, 0, 1, 1, 1, 1],
                    [1, 0, 0, 1, 1, 1, 1],
                    [1, 0, 1, 1, 1, 1, 1]]) == 2, "1st example"
    assert checkio([[0, 0, 0, 0, 0, 0, 0],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1, 1, 1],
                    [1, 1, 0, 1, 0, 1, 1],
                    [1, 0, 0, 0, 0, 0, 1],
                    [0, 0, 0, 0, 0, 0, 0]]) == 3, "2nd example"
    assert checkio([[1, 1, 1, 1, 1, 0, 1, 1],
                    [1, 0, 1, 1, 1, 0, 1, 1],
                    [1, 0, 1, 0, 1, 0, 1, 0],
                    [1, 0, 1, 1, 1, 0, 1, 1],
                    [0, 0, 1, 1, 0, 0, 0, 0],
                    [1, 0, 1, 1, 1, 1, 1, 1],
                    [1, 0, 1, 1, 1, 1, 1, 1],
                    [1, 1, 1, 0, 1, 1, 1, 1]]) == 2, "3rd example"
    print("Coding complete? Click 'Check' to earn cool rewards!")