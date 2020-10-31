#!/usr/bin/env checkio --domain=py run playfair-cipher

# ThePlayfair cipheror Playfair square, is a manual symmetric encryption technique and was the first literal digraph substitution    cipher. The scheme was invented in 1854 by Charles Wheatstone, but bears the name of Lord Playfair who promoted the    use of the cipher. The Playfair cipher uses a 5 by 5 table containing a keyword or phrase. Memorization of the    keyword and 4 simple rules are all that’s required to create the 5 by 5 table and use the cipher. For this mission,    we will do one better and use a 6 by 6 table.
# 
# For the key table, we should use ASCII letters in lowercase ("abcdefghijklmnopqrstuvwxyz") and digits    ("0123456789"). They are have the following order:
# 
# 
# "abcdefghijklmnopqrstuvwxyz0123456789"
# 
# To generate the key table, the spaces in the table must be filled with the letters contained in the keyword    (dropping any duplicate letters and digits), then the remaining spaces are filled with the rest of the letters and    digits of the alphabet in order. The key is written in the top rows of the table, from left to right. The keyword    together with the conventions for filling in the 6 by 6 table constitute the cipher key.
# 
# To encrypt a message, we will need to prepare a block of text. Upper case letters get transposed into lower case of    letters, we’d break the message into digraphs (groups of 2 letters) and skip white spaces and punctuation symbols.    The result would turn a message like "Hello World!" into "he ll ow or ld", and would get mapped out in the key    table. The two letters of the digraph are considered to be the opposite corners of a rectangle in the key table.    Note the relative position of the corners of this rectangle. Then apply the following 4 rules, in order, to each    pair of letters in the plaintext:
# 
# Prepare text: convert to lowercase, remove all non-useable symbols (white spaces, punctuation etc) and break the        message into digraphs. If both letters are the same, add an "x" after the first letter (for double "x" use "z"        as completion character) and shift following digraphs. If needed, append a "z" to complete the final digraph (or        "x" if the last letter is "z"). For example "pp dr ..." will become "px pd r..." before encoding and "xx zz ..."        will became "xz xz z...".If the letters appear on the same row of your table, replace them with the letters to their immediate right        respectively (wrapping around to the left side of the row if a letter in the original pair was on the right side        of the row).If the letters appear on the same column of your table, replace them with the letters immediately below        respectively (wrapping around to the top side of the column        if a letter in the original pair was on the bottom side of the column).If the letters are not on the same row or column, replace them with the letters on the same row respectively but        at the other pair of corners of the rectangle defined by the original pair. The order is important – the first        letter of the encrypted pair is the one that lies on the same row as the first letter of the plaintext pair.To decrypt, use the inverse (opposite) of the last 3 rules and you will get the processed (cut version).
# 
# For example, the keyword is "checkio101". Then the key table will be looked as
# 
# 
# c h e k i o
# 1 0 a b d f
# g j l m n p
# q r s t u v
# w x y z 2 3
# 4 5 6 7 8 9
# 
# Let's the message is "Fizz Buzz is x89 XX." After using rule 1 (text preparation) we will get -    "fi zx zb uz zi sx 89 xz xz".
# - "fi" => "do";
# - "zx" => "2y";
# - "zb" => "7m";
# - "uz" => "t2";
# - "zi" => "2k";
# - "sx" => "ry";
# - "89" => "94";
# - "xz" => "y2";
# - "xz" => "y2".
# And the encoded message is "do2y7mt22kry94y2y2".
# 
# You should write two functions - "encode" and "decode". Each function receives a message (ciphered or opened) and    keyword. The "encode" function processes and encrypts a message. The "decode" function decrypts the encoded message    (of course in the processed version).
# 
# Input:Two arguments. A message as a string (unicode) and a keyword as a string (unicode).
# 
# Output:The encoded or decoded message (related to function).
# 
# Precondition:0 < len(key) ≤ 36
# 
# 
# Sources:Wikipedia
# 
# 
# 
# END_DESC

import re
import itertools


def generate_key_table(key: str) -> list:
    original_str = 'abcdefghijklmnopqrstuvwxyz0123456789'
    key_str = []
    key_table = []

    # find whether the key contains duplicate letters
    for x in key:
        if x not in key_str:
            key_str.append(x)
    # print(key_str)

    # attach more keys to key_str if it's not found in the original_str
    for x in original_str:
        if x not in key_str:
            key_str.append(x)
    # print(key_str)

    # put it in 6x6 matrix form
    for i in range(6):
        row = []
        for j in range(6):
            row.append(key_str[i * 6 + j])
        key_table.append(row)
    # print(key_table)
    return key_table


def encode(message, key):

    # get key table
    key_table = generate_key_table(key)
    key_table_t = [[key_table[j][i] for j in range(len(key_table))] for i in range(len(key_table[0]))]
    # print("key table: ", key_table)
    # print("key table trans: ", key_table_t)

    # massage message, remove punctuation and white space
    new_msg = ''
    for x in message:
        if x.isalnum():
            new_msg += x.lower()

    # if there's repeat char, insert one x, if double 'xx', insert 'z' instead of 'x'
    fin = False
    while not fin:
        i = 0
        while i < (len(new_msg) // 2):
            a = i * 2
            if new_msg[a] == new_msg[a + 1]:
                if new_msg[a] == 'x':
                    new_msg = new_msg[:a + 1] + 'z' + new_msg[a + 1:]
                    break
                else:
                    new_msg = new_msg[:a + 1] + 'x' + new_msg[a + 1:]
                    break
            i += 1
        else:
            fin = True

    # message has to be in digraph format, insert z at the end to make up the space
    if len(new_msg) % 2:
        new_msg += 'z'
    # print("pre-digraph:", new_msg)

    # encode digraphs
    digraphs = [str(i + j) for i, j in zip(new_msg[::2], new_msg[1::2])]
    # print("digraphs:", digraphs)
    ans = []
    for dg in digraphs:
        hor = False
        ver = False

        # find out if both digraphs exist in any row
        for x in key_table:
            if dg[0] in x and dg[1] in x:
                hor = True
                i0 = x.index(dg[0])
                if i0 + 1 < 6:
                    i0 += 1
                else:
                    i0 = 0
                i1 = x.index(dg[1])
                if i1 + 1 < 6:
                    i1 += 1
                else:
                    i1 = 0
                s = str(x[i0]) + str(x[i1])
                ans.append(s)
                # print("hor: ", dg, "->", s)
                break

        # find out if both digraphs exist in any column
        for y in key_table_t:
            if dg[0] in y and dg[1] in y:
                ver = True
                i0 = y.index(dg[0])
                if i0 + 1 < 6:
                    i0 += 1
                else:
                    i0 = 0
                i1 = y.index(dg[1])
                if i1 + 1 < 6:
                    i1 += 1
                else:
                    i1 = 0
                s = str(y[i0]) + str(y[i1])
                ans.append(s)
                # print("ver: ", dg, "->", s)
                break

        # restart search
        if hor or ver:
            continue

        # it must be in the anywhere in map
        # find i, j for dg[0]
        for i in range(0, 6):
            x = key_table[i]
            if dg[0] in x:
                j = x.index(dg[0])
                break

        # find m, n for dg[1]
        for m in range(0, 6):
            y = key_table[m]
            if dg[1] in y:
                n = y.index(dg[1])
                break

        # row (left, right)
        if n > j:
            lf, rt = j, n
        else:
            lf, rt = n, j

        # col (top, bottom)
        if m > i:
            bt, tp = i, m
        else:
            bt, tp = m, i

        if j == lf:
            b, d = rt, lf
        else:
            b, d = lf, rt

        if i == bt:
            c = tp
        else:
            c = bt

        s = str(key_table[i][b]) + str(key_table[c][d])
        ans.append(s)
        # print("dia: ",  dg, '->',  s)

    return ''.join(ans)


def decode(secret_message, key):
    key_table = generate_key_table(key)
    key_table_t = [[key_table[j][i] for j in range(len(key_table))] for i in range(len(key_table[0]))]


    digraphs = [str(i + j) for i, j in zip(secret_message[::2], secret_message[1::2])]
    # print("pre-digraphZ: ", digraphs)

    ans = []

    for dg in digraphs:
        hor = False
        ver = False

        for x in key_table:
            if dg[0] in x and dg[1] in x:
                hor = True
                i0 = x.index(dg[0])
                if i0 >= 1:
                    i0 -= 1
                else:
                    i0 = 5      # 0 - 5
                i1 = x.index(dg[1])
                if i1 >= 1:
                    i1 -= 1
                else:
                    i1 = 5      # 0 - 5
                s = str(x[i0] + str(x[i1]))
                ans.append(s)
                # print("horZ: ", dg, "->", s)
                break

        for y in key_table_t:
            if dg[0] in y and dg[1] in y:
                ver = True
                i0 = y.index(dg[0])
                if i0 >= 1:
                    i0 -= 1
                else:
                    i0 = 5
                i1 = y.index(dg[1])
                if i1 >= 1:
                    i1 -= 1
                else:
                    i1 = 5
                s = str(y[i0]) + str(y[i1])
                ans.append(s)
                # print("verZ: ", dg, "->", s)
                break

        # restart search
        if hor or ver:
            continue

        # find i, j for dg[0]
        for i in range(0, 6):
            x = key_table[i]
            if dg[0] in x:
                j = x.index(dg[0])
                break

        # find m, n for dg[1]
        for m in range(0, 6):
            y = key_table[m]
            if dg[1] in y:
                n = y.index(dg[1])
                break

        # row (left, right)
        if n > j:
            lf, rt = j, n
        else:
            lf, rt = n, j

        # col (top, bottom)
        if m > i:
            bt, tp = i, m
        else:
            bt, tp = m, i

        if j == lf:
            b, d = rt, lf
        else:
            b, d = lf, rt

        if i == bt:
            c = tp
        else:
            c = bt

        s = str(key_table[i][b]) + str(key_table[c][d])
        # print("dia: ",  dg, '->',  s)
        ans.append(s)

    return ''.join(ans)


if __name__ == '__main__':
    # print(encode("Fizz Buzz is x89 XX.", "checkio101"))
    # print(decode("do2y7mt22kry94y2y2", "checkio101"))

    # These "asserts" using only for self-checking and not necessary for auto-testing

    # assert encode("Fizz Buzz is x89 XX.", "checkio101") == 'do2y7mt22kry94y2y2', "Encode fizz buzz"
    assert decode("do2y7mt22kry94y2y2", "checkio101") == 'fizxzbuzzisx89xzxz', "Decode fizz buzz"
    assert encode("How are you?", "hello") == 'ea2imb1ht0', "Encode How are you"
    assert decode("ea2imb1ht0", "hello") == 'howareyouz', "Decode How are you"
    assert encode("My name is Alex!!!", "alexander") == 'i1dlkxjqlexn', "Encode Alex"
    assert decode("i1dlkxjqlexn", "alexander") == 'mynameisalex', "Decode Alex"
    assert encode("Who are you?", "human") == 'rnvftc1jd5', "Encode WHo"
    assert decode("rnvftc1jd5", "human") == 'whoareyouz', "Decode Who"
    assert encode("ATTACK AT DAWN", "general") == 'ewwektewhnua', "Encode attack"
    assert decode("ewwektewhnua", "general") == 'attackatdawn', "Decode attack"
    print("yes")