#!/usr/bin/env checkio --domain=py run long-non-repeat

# There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
# 
# A very similar to the first is the second mission of the series with only one distinction is that you should look in a completely different way. You need to find the first longest substring with all unique letters. For example, in substring "abca" we have two substrings with unique letters "abc" and "bca", but we should take the first one, so the answer is "abc".
# 
# Input:String.Output:String.
# 
# 
# 
# 
# END_DESC

def non_repeat(line):

    # build unique set
    s = set(line)
    d = {i: False for i in s}
    ans = []

    # loop thru all all substring and test against unique set
    # storing answers in a list and find which one is longest

    for i in range(0, len(line)+1):
        for j in range(i, len(line)+1):
            x = slice(i, j)
            l = line[x]
            # print(l)

            dc = d.copy()
            for m in l:
                if dc[m]:
                    break;
                else:
                    dc[m] = True
            else:
                ans.append(l)

    #print(ans)

    final = max(ans, key=len)
    print(final)

    return final



if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert non_repeat('aaaaa') == 'a', "First"
    assert non_repeat('abdjwawk') == 'abdjw', "Second"
    assert non_repeat('abcabcffab') == 'abcf', "Third"
    print('"Run" is good. How is "Check"?')