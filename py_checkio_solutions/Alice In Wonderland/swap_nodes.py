#!/usr/bin/env checkio --domain=py run swap-nodes

# Your task is to swap elements of the list (Iterable) pairwise. If you are given a list of 4 elements, then your function should return the same list, only in it the first and second elements are interchanged, as well as the third and fourth.
# 
# If there isn’t a paired amount of elements, then leave the last unpaired element in its place. An empty list should remain empty.
# 
# Input:Iterable.
# 
# Output:Iterable.
# 
# 
# END_DESC

def swap_nodes(a):
    # your code here
    return None


if __name__ == '__main__':
    print("Example:")
    print(list(swap_nodes([1, 2, 3, 4])))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(swap_nodes([1, 2, 3, 4])) == [2, 1, 4, 3]
    assert list(swap_nodes([5, 5, 5, 5])) == [5, 5, 5, 5]
    assert list(swap_nodes([1, 2, 3])) == [2, 1, 3]
    assert list(swap_nodes([3])) == [3]
    assert list(swap_nodes(["hello", "world"])) == ["world", "hello"]
    print("Coding complete? Click 'Check' to earn cool rewards!")