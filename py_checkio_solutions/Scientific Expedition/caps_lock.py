#!/usr/bin/env checkio --domain=py run caps-lock

# Joe Palooka has fat fingers, so he always hits the “Caps Lock” key whenever he actually intends to hit the key  “a” by itself. (When Joe tries to type in some accented version of “a” that needs more keystrokes to conjure the accents, he is more careful in the presence of such raffinated characters ([Shift] + [Char]) and will press the keys correctly.) Compute and return the result of having Joe type in the given text. The “Caps Lock” key affects only the letter keys from “a” to “z” , and has no effect on the other keys or characters. “Caps Lock” key is assumed to be initially off.
# 
# Input:A string. The typed text.
# 
# Output:A string. The showed text after being typed.
# 
# The mission was taken from Python CCPS 109 Fall 2018. It is taught for Ryerson Chang School of Continuing Education byIlkka Kokkarinen
# 
# 
# END_DESC

def caps_lock(text: str) -> str:
    
    CAP_LOCK = False

    ans = ''

    for n in text:
        if n == 'a':
            if CAP_LOCK:
                CAP_LOCK = False
            else:
                CAP_LOCK = True
        else:
            if CAP_LOCK:
                ans += n.upper()
            else:
                ans += n

    return ans


if __name__ == '__main__':
    print("Example:")
    print(caps_lock("Why are you asking me that?"))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert caps_lock("Why are you asking me that?") == "Why RE YOU sking me thT?"
    assert caps_lock("Always wanted to visit Zambia.") == "AlwYS Wnted to visit ZMBI."
    print("Coding complete? Click 'Check' to earn cool rewards!")