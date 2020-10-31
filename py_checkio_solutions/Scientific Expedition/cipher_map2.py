#!/usr/bin/env checkio --domain=py run cipher-map2

# 
# END_DESC

import copy


def matrix_rot_90(source: list, destination: list):

    for x in range(0, 4):
        for y in range(0, 4):
            destination[x][y] = source[3-y][x]


def recall_password(cipher_grille, ciphered_password):

    s = ""
    mat1 = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    mat2 = copy.deepcopy(mat1)
    mat3 = copy.deepcopy(mat1)
    mat4 = copy.deepcopy(mat1)

    for x in range(0, 4):
        for y in range(0, 4):
            if cipher_grille[x][y] == 'X':
                mat1[x][y] = 1
            else:
                mat1[x][y] = 0

    matrix_rot_90(mat1, mat2)
    matrix_rot_90(mat2, mat3)
    matrix_rot_90(mat3, mat4)

    mats = [mat1, mat2, mat3, mat4]

    for mat in mats:
        for x in range(0,4):
            for y in range(0, 4):
                if mat[x][y]:
                    s += ciphered_password[x][y]
    print(s)
    return s

    '''
    print(mat1)
    print(mat2)
    print(mat3)
    print(mat4)
    mat1 = [['a', 'b', 'c', 'd'], ['e', 'f', 'g', 'h'], ['i', 'j', 'k', 'l'],
            ['m', 'n', 'o', 'p']]
    mat1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
    mat1 = [[1,0,0,0],[0,0,1,0], [1,0,0,1],[0,0,0,0]]
    '''



if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert recall_password(
        ('X...',
         '..X.',
         'X..X',
         '....'),
        ('itdf',
         'gdce',
         'aton',
         'qrdi')) == 'icantforgetiddqd', 'First example'

    assert recall_password(
        ('....',
         'X..X',
         '.X..',
         '...X'),
        ('xhwc',
         'rsqx',
         'xqzz',
         'fyzr')) == 'rxqrwsfzxqxzhczy', 'Second example'