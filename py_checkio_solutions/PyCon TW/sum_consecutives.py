#!/usr/bin/env checkio --domain=py run sum-consecutives

# You are given a list that contains solely integers (positive and negative). Your job is to sum only the numbers that are identical and consecutive.
# 
# Input:a list.
# 
# Output:an iterable.
# 
# 
# END_DESC

def sum_consecutives(a):
    # your code here
    return None


if __name__ == '__main__':
    print("Example:")
    print(list(sum_consecutives([1, 1, 1, 1])))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(sum_consecutives([1, 1, 1, 1])) == [4]
    assert list(sum_consecutives([1, 1, 2, 2])) == [2, 4]
    assert list(sum_consecutives([1, 1, 2, 1])) == [2, 2, 1]
    assert list(sum_consecutives([3, 3, 3, 4, 4, 5, 6, 6])) == [9, 8, 5, 12]
    assert list(sum_consecutives([1])) == [1]
    assert list(sum_consecutives([])) == []
    print("Coding complete? Click 'Check' to earn cool rewards!")