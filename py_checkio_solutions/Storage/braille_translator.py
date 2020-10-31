#!/usr/bin/env checkio --domain=py run braille-translator

# Brailleis a tactile writing system used by the blind and the visually impaired. It is    traditionally written with embossed paper. Braille characters are small rectangular blocks,    called cells, which contain tiny palpable bumps called raised dots. The number and arrangement    of these dots distinguish one character from another.
# 
# We will use a 6-dots Braille alphabet. Each letter can be represented as a 3x2 matrix where 1 is    a raised dot and 0 is an empty space.
# 
# 
# 
# (Letter W is not original)
# 
# Letters should be separated by an empty column. Whitespaces are two empty columns (plus a    separator empty column if it is between letters). Various formatting marks indicate the values    of the letters that follow them. They have no direct equivalent in print. The most important    indicators in English Braille are: "capital" and "number".    These marks work as "shift" - only for a follow letter.
# 
# 
# 
# We will use several basic punctuation symbols:
# 
# 
# 
# You are given a page of text and you should convert it into Braille. The page contains one or    several lines represented as a matrix. Each line contains no more than 10 symbols (including    non-printed). Lines are separated by one empty row. Symbols are separated by empty columns but    there are no separators in beginnings and ends of lines. If text can be placed in one line, then    the page width is proportional to the length of the text. If the page has more than one line,    then the width is equal to the longer line and the final line is appended by whitespaces.
# 
# For example, this is the text "hello 1st World!".
# 
# 
# 
# Input:A text as a string.
# 
# Output:The page as a list of lists or tuple of tuples with integers (1/0).
# 
# Precondition:
# 0 < len(text)
# all(ch in string.ascii_letters + " .,!?-_0123456789" for ch in text)
# 
# 
# END_DESC

from string import punctuation


def convert(code):
    bin_code = bin(code)[2:].zfill(6)[::-1]
    return [[int(bin_code[j + i * 3]) for i in range(2)] for j in range(3)]


LETTERS_NUMBERS = list(map(convert,
                           [1, 3, 9, 25, 17, 11, 27, 19, 10, 26,
                            5, 7, 13, 29, 21, 15, 31, 23, 14, 30,
                            37, 39, 62, 45, 61, 53, 47, 63, 55, 46, 26]))
CAPITAL_FORMAT = convert(32)
NUMBER_FORMAT = convert(60)
PUNCTUATION = {",": convert(2), "-": convert(18), "?": convert(38),
               "!": convert(22), ".": convert(50), "_": convert(36)}
WHITESPACE = convert(0)


def braille_page(text: str):

    ub = []     # un-formatted braille string

    for x in text:

        # encode each chars into braille format
        if x.isalnum():
            if x.isalpha():
                if x.isupper():
                    ub.append(CAPITAL_FORMAT)
                code = ord(x.lower()) - ord('a')
                ub.append(LETTERS_NUMBERS[code])
            elif x.isnumeric():
                ub.append(NUMBER_FORMAT)
                if x == '0':
                    code = 9        # 10th item, index = 9
                else:               # 1 to 9th item  -> index = 0 to 8
                    code = ord(x) - ord('1')
                ub.append(LETTERS_NUMBERS[code])
            else:
                raise   # bug if raised
            continue

        if x.isspace():
            ub.append(WHITESPACE)
        elif x in PUNCTUATION.keys():
            ub.append(PUNCTUATION[x])
        else:
            raise   # bug if raised

    # for debugging - un-formatted braille string
    # for x in ub:
    #     print(x)

    # fill with white space if it has more than one line
    if len(ub) % 10 and len(ub) > 10:
        a = 10 - len(ub) % 10
        for i in range(a):
            ub.append(WHITESPACE)

    # format the braille string into a "page"
    fp = ()             # formatted braille string
    counter = 0         # all word counter i.e. len(ub)
    wc = 0              # word counter on each line i.e 0-9
    line = [(), (), ()]

    for x in ub:
        for m in range(3):
            for n in range(2):
                line[m] += (x[m][n],)
            if wc != 9 and counter+1 != len(ub):
                line[m] += (0,)

        wc += 1
        counter += 1
        if wc == 10:
            fp += tuple(line)
            wc = 0
            line = [(), (), ()]

            if counter != len(ub):
                a = [(0,)*29]
                fp += tuple(a)
    else:
        if len(ub) < 10:
            fp += tuple(line)

    # debugging - formmatted page
    # for x in fp:
    #     print(x)

    return fp


if __name__ == '__main__':

    # print(braille_page('hello 1st World!'))
    # These "asserts" using only for self-checking and not necessary for auto-testinG

    def checker(func, text, answer):
        result = func(text)
        return answer == tuple(tuple(row) for row in result)

    assert checker(braille_page, "hello 1st World!", (
        (1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1),
        (1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1),
        (0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0),
        (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        (0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0),
        (0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0),
        (0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0))
    ), "Example"
    assert checker(braille_page, "42", (
        (0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0),
        (0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0),
        (1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0))), "42"
    assert checker(braille_page, "CODE", (
        (0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0),
        (0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
        (0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0))
    ), "CODE"