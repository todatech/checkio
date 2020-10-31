#!/usr/bin/env checkio --domain=py run isometric-strings

# Maybe it's a cipher? Maybe, but we don’t know for sure.
# 
# Maybe you can call it"homomorphism"? i wish I know this word before.
# 
# You need to check that the 2 given strings are isometric. This means that a character from one string can become a match for characters from another string.
# 
# One character from one string can correspond only to one character from another string. Two or more characters of one string can correspond to one character of another string, but not vice versa.
# 
# 
# END_DESC

# wrong implementation
'''
def isometric_strings(str1: str, str2: str) -> bool:

    if str1 == '' and str2 == '':
        return True
    
    dict1 = dict()
    dict2 = dict()

    # count char occurence
    for x in str1:
        if x in dict1:
            dict1[x] += 1
        else:
            dict1[x] = 1
    inv_dict1 = dict([(value, key) for key, value in dict1.items()])
    # print(inv_dict1)

    for x in str2:
        if x in dict2:
            dict2[x] += 1
        else:
            dict2[x] = 1
    inv_dict2 = dict([(value, key) for key, value in dict2.items()])
    # print(inv_dict2)

    # remapping into a test string
    test_str = str1
    for key in inv_dict1.keys():
        try:
            test_str = test_str.replace(inv_dict1[key], inv_dict2[key])
        except KeyError:
            return False

    if test_str == str2:
        return True
    else:
        return False
'''

def isometric_strings(str1: str, str2: str) -> bool:

    if str1 == '' and str2 == '':
        return True

    lookup = dict()
    for i in range(0, len(str1)):
        lookup[str1[i]] = str2[i]
    
    # print(lookup)
    ans = ''
    for i in range(0, len(str1)):
        ans += lookup[str1[i]]
    # print('ans:', ans)

    if ans == str2:
        return True
    else:
        return False

        
if __name__ == '__main__':
    print("Example:")
    print(isometric_strings('add', 'egg'))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert isometric_strings('add', 'egg') == True
    assert isometric_strings('foo', 'bar') == False
    assert isometric_strings('', '') == True
    assert isometric_strings('all', 'all') == True
    print("Coding complete? Click 'Check' to earn cool rewards!")