#!/usr/bin/env checkio --domain=py run evenly-spaced-trees

# You need to add some trees and keep them evenly spaced.
# 
# You are given a list of integers as an input value.This is the position of an existing tree.You must return the minimum number of additional trees needed so that they could be evenly spaced.
# 
# Positions of the existing trees are already sorted.All positions of trees are integers.Input:The position of the existing trees (a list of integers).
# 
# Output:The minimum number of additional trees (an integer).
# 
# How it is used:
# Landscape design.
# 
# Precondition:
# 0 ≤ Position of tree ≤ 1003 ≤ The existing trees
# 
# 
# END_DESC

from typing import List


def evenly_spaced_trees(trees: List[int]) -> int:
    return 0


if __name__ == '__main__':
    print("Example:")
    print(evenly_spaced_trees([0, 2, 6]))
    assert evenly_spaced_trees([0, 2, 6]) == 1, 'add 1'
    assert evenly_spaced_trees([1, 3, 6]) == 3, 'add 3'
    assert evenly_spaced_trees([0, 2, 4]) == 0, 'no add'
    print("Coding complete? Click 'Check' to earn cool rewards!")