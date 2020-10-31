#!/usr/bin/env checkio --domain=py run verify-anagrams

# An anagram is a type of word play,    the result of rearranging the letters of a word or phrase to produce a new word or phrase,    using all the original letters exactly once.    Two words are anagrams to each other if we can get one from another by rearranging the letters.    Anagrams are case-insensitive and don't take account whitespaces.    For example: "Gram Ring Mop" and "Programming" are anagrams. But "Hello" and "Ole Oh" are not.
# 
# You are given two words or phrase. Try to verify are they anagrams or not.
# 
# Input:Two arguments as strings.
# 
# Output:Are they anagrams or not as boolean (True or False)
# 
# Precondition:0<|first_word|<100;
# 0<|second_word|<100;
# Words contain only ASCII latin letters and whitespaces.
# 
# 
# END_DESC

from collections import defaultdict


def verify_anagrams(first_word, second_word):

    # sort all the letter into list
    fw = [x.lower() for x in first_word if x.isalpha()]
    sw = [x.lower() for x in second_word if x.isalpha()]

    # print(fw)
    # print(sw)
    
    # count the letters in the list into a fast dictionary
    df = defaultdict(int)
    for w in fw:
        df[w] += 1

    ds = defaultdict(int)
    for w in sw:
        ds[w] += 1

    # print(df)
    # print(ds)
    
    if len(ds.items()) != len(df.items()):
        return False
    
    # compare the two dictionaries and see if they match
    for k, v in df.items():
        if ds[k] == v:
            continue
        else:
            return False
    else:
        return True


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert isinstance(verify_anagrams("a", 'z'), bool), "Boolean!"
    assert verify_anagrams("Programming", "Gram Ring Mop") == True, "Gram of code"
    assert verify_anagrams("Hello", "Ole Oh") == False, "Hello! Ole Oh!"
    assert verify_anagrams("Kyoto", "Tokyo") == True, "The global warming crisis of 3002"