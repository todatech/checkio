#!/usr/bin/env checkio --domain=py run ascending-list

# Determine whether the sequence of elements items is  ascending so that its each element is  strictly larger   than (and not merely equal to) the element that precedes it.
# 
# Input:Iterable with ints.
# 
# Output:Bool.
# 
# The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
# 
# 
# END_DESC

from typing import Iterable
def is_ascending(items: Iterable[int]) -> bool:
    
    n = len(items)
    if n == 0 or n == 1:
        return True

    # Setting iterable items    
    iter_item = iter(items)

    prev_x = next(iter_item)

    while True:
        try:
            current_x = next(iter_item)
            if prev_x < current_x:
                prev_x = current_x
            else:
                return False
        except StopIteration:
            break

    return True


if __name__ == '__main__':
    print("Example:")
    print(is_ascending([-5, 10, 99, 123456]))
    
    # These "asserts" are used for self-checking and not for an auto-testing
    assert is_ascending([-5, 10, 99, 123456]) == True
    assert is_ascending([99]) == True
    assert is_ascending([4, 5, 6, 7, 3, 7, 9]) == False
    assert is_ascending([]) == True
    assert is_ascending([1, 1, 1, 1]) == False
    print("Coding complete? Click 'Check' to earn cool rewards!")