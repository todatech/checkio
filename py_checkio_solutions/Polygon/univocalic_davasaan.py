#!/usr/bin/env checkio --domain=py run univocalic-davasaan

# Being a rockstar is the intersection of who you are and who you want to be.
# 
# 
# - Slash (Guitarist for Guns N' Roses)
# 
# You have to write a function nameddavasaan(division with all vowels a)    which calculates integer division by 10.
# The vowels "eiou" are disallowed as are the slash "/",    asterisk "*", and period "." characters.
# 
# We have one more rule for thisunivocalicchallenge.    This is a code golf mission and your main goal is to make your code as short as possible:300 charactersis the maximum allowable.    The shorter your code, the more remarkable you are.
# Note that your code can start/end with empty lines and commented lines,    they are not considered for code length.    Hence you can comment a bit your code.
# 
# Input:A non-negative number as an integer.
# 
# Output:The integer division (//10) of the input as an integer.
# 
# Precondition:0 ≤ n ≤ 2,000,000,000
# 
# Special thanks tojtokazwho first created the mission years ago.
# 
# 
# END_DESC

def davasaan(x):
    return x//10

# this assertion should be stripped after self-testing.
if __name__ == '__main__':
    assert davasaan(0) == 0, "First"
    assert davasaan(7) == 0, "Second"
    assert davasaan(81) == 8, "Third"
    assert davasaan(199) == 19, "Fourth"
    assert davasaan(4500) == 450, "Fifth"
    assert davasaan(9999) == 999, "Sixth"
    print('Click on "Check" to get your code inspected and for real tests.')