#!/usr/bin/env checkio --domain=py run double-substring

# There are four substring missionsthat were born all in one day and you shouldn’t be needed more than one day to solve them. All of those mission can be simply solved by brute force, but is it always the best way to go? (you might not have access to all of those missions yet, but they are going to be available with more opened islands on the map).
# 
# This is the third mission of the series, and it’s the only one where you have to return not a substring but a substring length. You need to find a substring that repeats more than once in a given string. This reiteration shouldn't have overlaps. For example, in a string "abcab" the longest substring that repeats more than once is "ab", so the answer should be 2 (length of "ab")
# 
# Input:String.Output:Int.
# 
# 
# 
# 
# END_DESC

def double_substring(line):

    # slicing the line front to back to create a list that has a variation of substrings
    li = []
    for i in range(0, len(line)+1):
        for j in range(i, len(line)+1):
            x = slice(i, j)
            if line[x] and len(line[x]) >= 1:
                li.append(line[x])
    # print("li:", li)

    # find a unique set
    u = set(li)
    # print("u: ", u)

    # put into dictionary
    d = {x: 0 for x in u}
    # print("d: ", d)

    # search for the patterns from dictionary "d" to see if it happens in "line"
    # and tally up the occurrence
    for k, v in d.items():
        c = 0
        c = line.find(k, c)
        while c != -1:
            c += len(k)
            d[k] += 1
            # print("k: ", k, "d[k]: ", d[k])
            c = line.find(k, c)

    # print("d count: ", d)
    # eliminate counts = 0, 1
    e = {k: v for k, v in d.items() if v > 1}
    # print("e: ", e)

    if not e:
        print(0)
        return 0

    f = sorted(e.keys(), key=len, reverse=True)
    # print("f: ", f)
    ans = len(f[0])

    print(ans)
    return ans


if __name__ == '__main__':

    # These "asserts" using only for self-checking and not necessary for auto-testing
    # double_substring('aa')
    # double_substring('abc')
    # double_substring('aghtfghkofgh')

    assert double_substring('aaaa') == 2, "First"
    assert double_substring('abc') == 0, "Second"
    assert double_substring('aghtfghkofgh') == 3, "Third"
    print('"Run" is good. How is "Check"?')