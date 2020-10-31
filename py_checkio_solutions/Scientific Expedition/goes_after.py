#!/usr/bin/env checkio --domain=py run goes-after

# In a given word you need to check if one symbol goes right after another.
# 
# Cases you should expect while solving this challenge:
# 
# one of the symbols are not in the given word - your function should return False;any symbol appears in a word more than once - use only the first one;two symbols are the same - your function should return False;the condition is case sensitive, which mease 'a' and 'A' are two different symbols.Input:Three arguments. The first one is a given string, second is a symbol that shoud go first, and the third is a symbold that should go after the first one.
# 
# Output:A bool.
# 
# 
# END_DESC

def goes_after(word: str, first: str, second: str) -> bool:

    # 1st check, if any symbol not exist, it return false
    # 2nd check is correct since only find first occurrence
    first_loc = word.find(first)
    second_loc = word.find(second)

    if first_loc == -1 or second_loc == -1:
        return False
    
    # 3rd check return false if first == second
    if first == second:
        return False

    if first_loc + 1 == second_loc:
        return True
    else:
        return False

    # Not Work
    # checker = ''.join([first, second])
    # loc = word.find(checker)
    # if loc == -1:
    #     return False
    # else:
    #     return True


if __name__ == '__main__':
    print("Example:")
    print(goes_after('world', 'w', 'o'))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert goes_after('world', 'w', 'o') == True
    assert goes_after('world', 'w', 'r') == False
    assert goes_after('world', 'l', 'o') == False
    assert goes_after('panorama', 'a', 'n') == True
    assert goes_after('list', 'l', 'o') == False
    assert goes_after('', 'l', 'o') == False
    assert goes_after('list', 'l', 'l') == False
    assert goes_after('world', 'd', 'w') == False
    print("Coding complete? Click 'Check' to earn cool rewards!")