#!/usr/bin/env checkio --domain=py run morse-clock

# 
# END_DESC

def checkio(time_string: str) -> str:

    # convert time string to int of h m s
    li = []
    for x in time_string.split(':'):
        li.append(int(x))
    # print(li)

    # convert back to zero leading num string
    s = "{0:02d}{1:02d}{2:02d}".format(li[0], li[1], li[2])
    # print(s)

    # split back into list of int
    li = []
    for x in s:
        li.append(int(x))

    # print("In bin:")
    s = "{0:02b} {1:04b} : {2:03b} {3:04b} : {4:03b} {5:04b}".format(li[0], li[1], li[2], li[3], li[4], li[5])
    # print(s)
    s = s.replace('0', '.')
    s = s.replace('1', '-')
    # print("In Morse:")
    # print(s)
    return s


if __name__ == '__main__':
    print("Example:")
    print(checkio("10:37:49"))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio("10:37:49") == ".- .... : .-- .--- : -.. -..-", "First Test"
    assert checkio("21:34:56") == "-. ...- : .-- .-.. : -.- .--.", "Second Test"
    assert checkio("00:1:02") == ".. .... : ... ...- : ... ..-.", "Third Test"
    assert checkio("23:59:59") == "-. ..-- : -.- -..- : -.- -..-", "Fourth Test"
    print("Coding complete? Click 'Check' to earn cool rewards!")