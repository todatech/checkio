#!/usr/bin/env checkio --domain=py run sort-array-by-element-frequency

# Sort the given iterable so that its elements end up in the decreasing frequency order, that is, the number of times they appear in elements. If two elements have the same frequency, they should end up in the same order as the first appearance in the iterable.
# 
# Input:Iterable
# 
# Output:Iterable
# 
# Precondition:elements can be ints or strings
# 
# The mission was taken from Python CCPS 109 Fall 2018. It's being taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
# 
# 
# END_DESC

from operator import itemgetter


def frequency_sort(items):

    # unique set
    s = set(items)
    # print(s)

    # order set
    o = []
    for i in items:
        if i in s and i not in o:
            o.append(i)
    # print(o)

    # order set with enumeration - large descending order
    oe = list(reversed(list(enumerate(list(reversed(o))))))
    # oe = list(enumerate(o))
    # print(oe)

    # order freq dict
    df = {f: 0 for f in o}
    for i in items:
        df[i] += 1
    # print(df)

    # combine freq and enum into one list
    fe = []
    for k, v in df.items():
        for j in oe:
            if k == j[1]:
                fe.append((k, v, j[0]))
    # print("before:")
    # print(fe)

    # sort by col2, col3
    fe.sort(key=itemgetter(1, 2), reverse=True)
    # print("after:")
    # print(fe)

    # expansion

    ex = []
    for x in fe:
        for i in range(0, x[1]):
            ex.append(x[0])
    # print(ex)

    return ex




if __name__ == '__main__':
    print("Example:")
    print(frequency_sort([4, 6, 2, 2, 6, 4, 4, 4]))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert list(frequency_sort([4, 6, 2, 2, 6, 4, 4, 4])) == [4, 4, 4, 4, 6, 6, 2, 2]
    assert list(frequency_sort(['bob', 'bob', 'carl', 'alex', 'bob'])) == ['bob', 'bob', 'bob', 'carl', 'alex']
    assert list(frequency_sort([17, 99, 42])) == [17, 99, 42]
    assert list(frequency_sort([])) == []
    assert list(frequency_sort([1])) == [1]
    print("Coding complete? Click 'Check' to earn cool rewards!")