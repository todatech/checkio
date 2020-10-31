#!/usr/bin/env checkio --domain=py run the-fastest-horse

# We have some horse racing statistics  (each horse’s time in each race)
# You have to find the number of the horse which has the most wins.
# For example: if the results are [[“1:13”, “1:26”, “1:11”], [“1:10”, “1:18”, “1:14”], [“1:20”, “1:23”, “1:15”]] then the 3rd horse is the fastest, because it has won 2 races out of 3.
# Every element in the list - is a string in format m:ss, for example, "1:05" or "2:22". 1:00<= time<= 5:00
# 
# 
# 
# Input:Racing time as an array of arrays.
# 
# Output:The number of the fastest horse that has the most wins (Important: in this task the horse numbers starts from "1", not from "0")
# 
# Precondition:
# 2<= horses<= 10
# 1<= races<= 10
# 1:00<= time<= 5:00
# There is only 1 fastest horse in each test
# 
# 
# END_DESC

from operator import itemgetter


def fastest_horse(horses: list) -> int:

    hs = []
    for races in horses:
        ra = []
        for i, r in enumerate(races, 1):
            a = r.split(':')
            t = int(a[0])*60 + int(a[1])
            ra.append((i, t))
        ra.sort(key=itemgetter(1))
        hs.append(ra)
    print(hs)

    d = {}
    for h in hs:
        i = 0
        for r in h:
            if not d.get(r[0]):
                d[r[0]] = i
            else:
                d[r[0]] += i
            print(d)
            i += 1

    ans = min(d, key=d.get)
    print("min: " + str(ans))
    return ans




if __name__ == '__main__':
    print("Example:")
    print(fastest_horse([['1:13', '1:26', '1:11']]))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert fastest_horse([['1:13', '1:26', '1:11'], ['1:10', '1:18', '1:14'], ['1:20', '1:23', '1:15']]) == 3
    print("Coding complete? Click 'Check' to earn cool rewards!")