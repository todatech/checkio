#!/usr/bin/env checkio --domain=py run humpty-dumpty

# .story.shadow {        float: left;        /*padding: 10px;*/        margin: 10px;        border: black;    }
# END_DESC

import math


def checkio(height, width):

    # prolate (elongated) spheroid (x,y,z) = (a,b,c) where c > a (
    # oblate (flattened) spheroid (x,y,z) = (a,b,c) where c < a

    a = width / 2
    c = height / 2
    volume = 0
    surface_area = 0

    if c == a:      # case of sphere
        print("Sphere")
        volume = 4 / 3 * math.pi * (a**3)
        surface_area = 4 * math.pi * (a**2)
    elif c > a:     # case of prolate spheroid
        print("Prolate")
        e_sq = 1 - (a**2)/(c**2)
        e = math.sqrt(e_sq)
        surface_area = 2 * math.pi * (a**2) * (1 + (c/a/e) * math.asin(e))
        volume = 4 * math.pi / 3 * (a**2) * c
    else:           # case of oblate spheroid
        print("Oblate")
        e_sq = 1 - (c**2)/(a**2)
        e = math.sqrt(e_sq)
        surface_area = 2 * math.pi * a ** 2 + math.pi * (c**2)/e * math.log((1+e)/(1-e))
        volume = 4 * math.pi / 3 * (a ** 2) * c

    print("Volume: {}, Surface Area: {}".format(volume, surface_area))
    return [round(volume, 2), round(surface_area, 2)]
    # return [1, 1]


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    # checkio(2, 4)
    assert checkio(4, 2) == [8.38, 21.48], "Prolate spheroid"
    assert checkio(2, 2) == [4.19, 12.57], "Sphere"
    assert checkio(2, 4) == [16.76, 34.69], "Oblate spheroid"