#!/usr/bin/env checkio --domain=py run radiation-search

# The robots have learned that the last container which they picked up during a supply stop on another island is    radioactive.    There are five different kinds of spare parts contained within marked by number.    The radiation is emitted from the largest group of identical spare parts (where each part is adjacently joined).    Help them find this group and point out the quantity of identical parts within the group as well as    the number of the spare part itself in the container.
# 
# The container is represented as a square matrix.    The numbers 1 through 5 are used to label the different kinds of spare parts -- the elements of the matrix.    Zero is an empty cell.    Find the largest group of identical numbers adjacently joined to each other and    point out both the quantity of the spare parts within the group and the number of the spare part itself.
# 
# Input:A square matrix as a list of lists. Each list contains integers
# 
# Output:The size and marking of the largest group as a list of two integers.
# 
# Precondition:
# 3 ≤ len(matrix) ≤ 10
# all(all(0 ≤ x ≤ 5 for x in row) for row in matrix
# any(any(x for x in row) for row in matrix
# The tests have only one unique solutions.
# 
# 
# END_DESC

def checkio(matrix):
    #replace this for solution
    return [0, 0]

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    assert checkio([
        [1, 2, 3, 4, 5],
        [1, 1, 1, 2, 3],
        [1, 1, 1, 2, 2],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
    ]) == [14, 1], "14 of 1"

    assert checkio([
        [2, 1, 2, 2, 2, 4],
        [2, 5, 2, 2, 2, 2],
        [2, 5, 4, 2, 2, 2],
        [2, 5, 2, 2, 4, 2],
        [2, 4, 2, 2, 2, 2],
        [2, 2, 4, 4, 2, 2]
    ]) == [19, 2], '19 of 2'