#!/usr/bin/env checkio --domain=py run roman-numerals

# .numeral-table {    margin: auto;    border-collapse: collapse;    text-align: center;  }  .numeral-table * {    border: 1px solid black;    padding: 8px;    width: 50%;  }
# END_DESC

ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', ]
thousands = ['', 'M', 'MM', 'MMM']

def checkio(data):

    s = ""

    # thousands
    m = int(data/1000)
    reminder = data % 1000
    if m > 0:
        s += thousands[m]

    # hundreds
    c = int(reminder/100)
    reminder = reminder % 100
    if c > 0:
        s += hundreds[c]

    # tens
    x = int(reminder / 10)
    reminder = reminder % 10
    if x > 0:
        s += tens[x]

    # ones
    if reminder > 0:
        s += ones[reminder]

    print(s)
    return s


if __name__ == '__main__':
    print(checkio(499))
    print(checkio(3888))

    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio(6) == 'VI', '6'
    assert checkio(76) == 'LXXVI', '76'
    assert checkio(499) == 'CDXCIX', '499'
    assert checkio(3888) == 'MMMDCCCLXXXVIII', '3888'
    print('Done! Go Check!')


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio(6) == 'VI', '6'
    assert checkio(76) == 'LXXVI', '76'
    assert checkio(499) == 'CDXCIX', '499'
    assert checkio(3888) == 'MMMDCCCLXXXVIII', '3888'
    print('Done! Go Check!')