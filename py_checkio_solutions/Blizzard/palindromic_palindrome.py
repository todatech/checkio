#!/usr/bin/env checkio --domain=py run palindromic-palindrome

# Write a palindromic program with acheckio(s)function that checks whethers(a string) is a palindrome.
# 
# For this task, using "#" is forbidden.
# 
# You can use other methods for the function's definition (for example a lambda).    The test will try to run the function "checkio" from your code.
# 
# The example of the palindromic code:
# 
# 
#     checkio=lambda x: x#x :x adbmal=oikcehc
# However, in your code, you can not use "#".
# 
# Input:A text as a string.
# 
# Output:Palindrome or not as a boolean.
# 
# Precondition:1<|text| ≤ 20
# The text contains only ASCII letters in lowercase.
# 
# 
# END_DESC

def checkio(s):
    return s == s[::-1]

#checkio = lambda s: