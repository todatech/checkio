#!/usr/bin/env checkio --domain=py run bird-language

# Stephan has a friend who happens to be a little mechbird.    Recently, he was trying to teach it how to speak basic language.    Today the bird spoke its first word: "hieeelalaooo".    This sounds a lot like "hello", but with too many vowels.    Stephan asked Nikola for help and he helped to examine how the bird changes words.    With the information they discovered, we should help them to make a translation module.
# 
# The bird converts words by two rules:
# - after each consonant letter the bird appends a random vowel letter (l ⇒ la or le);- after each vowel letter the bird appends two of the same letter (a ⇒ aaa);Vowels letters == "aeiouy".
# You are given an ornithological phrase as several words which are separated by white-spaces    (each pair of words by one whitespace).    The bird does not know how to punctuate its phrases and only speaks words as letters.    All words are given in lowercase.    You should translate this phrase from the bird language to something more understandable.
# 
# Input:A bird phrase as a string.
# 
# Output:The translation as a string.
# 
# Precondition:re.match("\A([a-z]+\ ?)+(?<!\ )\Z", phrase)
# A phrase always has the translation.
# 
# 
# END_DESC

import re
VOWELS = "aeiouy"

def translate(phrase):

    pat = '[^aeiouy][aeiouy]|a{3}|e{3}|i{3}|o{3}|u{3}|y{3}'

    li = phrase.split(' ')
    my_phrase = ""
    for l in li:
        print("word: " + l)
        sections = re.findall(pat, l)
        my_word = ""
        for section in sections:
            my_word += section[0]
            # print(section)
            #if section[0] not in VOWELS:
            #    my_word += section[0]
            #else:
            #    my_word += section[0]
        print("my_word: " + my_word)

        if not my_phrase:
            my_phrase = my_word
        else:
            my_phrase += " " + my_word

    #print("My Phrase: " + my_phrase)

    return my_phrase


if __name__ == '__main__':
    print("Example:")
    print(translate("hieeelalaooo"))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert translate("hieeelalaooo") == "hello", "Hi!"
    assert translate("hoooowe yyyooouuu duoooiiine") == "how you doin", "Joey?"
    assert translate("aaa bo cy da eee fe") == "a b c d e f", "Alphabet"
    assert translate("sooooso aaaaaaaaa") == "sos aaa", "Mayday, mayday"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")