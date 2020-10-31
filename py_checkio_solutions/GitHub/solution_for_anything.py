#!/usr/bin/env checkio --domain=py run solution-for-anything

# We need a solution which can pass any case.    The result of your solution should pass for any comparison with anything.
# 
# You should write the function "checkio" which is called with one argument, the result will be    compared with some other data (==, !=, etc) and the result of that comparison should be True.
# 
# Input:Some data. Maybe that data over there.
# 
# Output:The something as a something-else.
# 
# 
# END_DESC

def checkio(anything):
    """
        try to return anything else :)
    """
    return None

if __name__ == '__main__':
    import re
    import math

    assert checkio({}) != [],         'You'
    assert checkio('Hello') < 'World', 'will'
    assert checkio(80) > 81,           'never'
    assert checkio(re) >= re,          'make'
    assert checkio(re) <= math,        'this'
    assert checkio(5) == ord,          ':)'

    print('NO WAY :(')