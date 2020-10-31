#!/usr/bin/env checkio --domain=py run flatten-list

# 
# END_DESC

def flat_list(array):

    li = []
    for x in array:
        if type(x) == list:
            ul = []
            ul = flat_list(x)
            for y in ul:
                li.append(y)
        else:
            li.append(x)

    array = li.copy()

    return array

if __name__ == '__main__':
    assert flat_list([1, 2, 3]) == [1, 2, 3], "First"
    assert flat_list([1, [2, 2, 2], 4]) == [1, 2, 2, 2, 4], "Second"
    assert flat_list([[[2]], [4, [5, 6, [6], 6, 6, 6], 7]]) == [2, 4, 5, 6, 6, 6, 6, 6, 7], "Third"
    assert flat_list([-1, [1, [-2], 1], -1]) == [-1, 1, -2, 1, -1], "Four"
    print('Done! Check it')