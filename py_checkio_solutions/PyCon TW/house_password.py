#!/usr/bin/env checkio --domain=py run house-password

# 
# END_DESC

import re

def checkio(data: str) -> bool:

    check = False
    
    if len(data) >= 10:
        con1 = True
    else:
        con1 = False

    con2 = re.search("[a-z]", data)
    con3 = re.search("[A-Z]", data)
    con4 = re.search("[0-9]", data)

    if con1 and con2 and con3 and con4:
        check = True

    # replace this for solution
    return check
    
#Some hints
#Just check all conditions


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio('A1213pokl') == False, "1st example"
    assert checkio('bAse730onE4') == True, "2nd example"
    assert checkio('asasasasasasasaas') == False, "3rd example"
    assert checkio('QWERTYqwerty') == False, "4th example"
    assert checkio('123456123456') == False, "5th example"
    assert checkio('QwErTy911poqqqq') == True, "6th example"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")