#!/usr/bin/env checkio --domain=py run backward-each-word

# In a given string you should reverse every word, but the words should stay in their places.
# 
# Input:A string.
# 
# Output:A string.
# 
# Precondition:The line consists only from alphabetical symbols and spaces.
# 
# 
# END_DESC

def backward_string_by_word(text: str) -> str:

    # Test string
    # text = "Hello How Are You"

    # Special case 1, Empty String
    if text == '':
        return ''
   
    li = text.split(' ')
    ans = []

    for i in range(0, len(li)):
        old_word = li[i]
        ans.append(old_word[::-1])
        # if old_word != '':
        #     new_word = old_word[::-1]
        #     #print(new_word)
        #     ans.append(new_word)
        # else:
        #     ans.append('')
    
    return ' '.join(ans)

if __name__ == '__main__':
    print("Example:")
    print(backward_string_by_word(''))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert backward_string_by_word('') == ''
    assert backward_string_by_word('world') == 'dlrow'
    assert backward_string_by_word('hello world') == 'olleh dlrow'
    assert backward_string_by_word('hello   world') == 'olleh   dlrow'
    assert backward_string_by_word('welcome to a game') == 'emoclew ot a emag'
    print("Coding complete? Click 'Check' to earn cool rewards!")