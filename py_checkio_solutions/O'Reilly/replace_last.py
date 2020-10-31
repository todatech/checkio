#!/usr/bin/env checkio --domain=py run replace-last

# In a given list the last element should become the first one. An empty list or list with only one element should stay the same
# 
# 
# 
# Input:List.
# 
# Output:Iterable.
# 
# 
# END_DESC

from typing import Iterable


def replace_last(items: list) -> Iterable:
    # your code here
    return items


if __name__ == '__main__':
    print("Example:")
    print(list(replace_last([2, 3, 4, 1])))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(replace_last([2, 3, 4, 1])) == [1, 2, 3, 4]
    assert list(replace_last([1])) == [1]
    assert list(replace_last([])) == []
    print("Coding complete? Click 'Check' to earn cool rewards!")