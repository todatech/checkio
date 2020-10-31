#!/usr/bin/env checkio --domain=py run most-wanted-letter-2

# You are given a text, which contains different English letters and punctuation marks.    You should find the most frequent letter in the text. The letter returned must be in lowercase.
# During the search for the most wanted letter, casing doesn’t matter,    "A" == "a".    Make sure you don’t count in the punctuation marks, digits and whitespaces, just letters.
# 
# If you havetwo or more letters occurring the same number of times,    then return all of them as a list.    For example -- "Hello, Evan" should return ['e', 'l'].
# 
# Input:A text for analysis as a string.
# 
# Output:The list of the most frequent letters in lowercase.
# 
# Precondition:
# A text contains only ASCII symbols.
# 0 < len(text) ≤ 105
# 
# 
# END_DESC

def most_wanted(text: str) -> str:

    #replace this for solution
    return ['a']

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert sorted(most_wanted("Hello World!")) == ["l"], "Hello test"
    assert sorted(most_wanted("How do you do?")) == ["o"], "O is most wanted"
    assert sorted(most_wanted("One")) == ["e", "n", "o"], "All letter only once."
    assert sorted(most_wanted("Oops!")) == ["o"], "Don't forget about lower case."
    assert sorted(most_wanted("AAaooo!!!!")) == ["a", "o"], "Only letters."
    assert sorted(most_wanted("abe")) == ["a", "b", "e"], "The First."
    print("Start the long test")
    assert sorted(most_wanted("a" * 9000 + "b" * 1000)) == ["a"], "Long."
    print("The local tests are done.")