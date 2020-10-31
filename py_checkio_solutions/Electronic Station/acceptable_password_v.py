#!/usr/bin/env checkio --domain=py run acceptable-password-v

# In this mission you need to create a password verification function.
# 
# Those are the verification conditions:
# 
# the length should be bigger than 6;should contain at least one digit, but it cannot consist of just digits;having numbers or containing just numbers does not apply to the password longer than 9.a string should not contain the word "password" in any case.Input:A string.
# 
# Output:A bool.
# 
# 
# END_DESC

# Taken from mission Acceptable Password IV

# Taken from mission Acceptable Password III

# Taken from mission Acceptable Password II

# Taken from mission Acceptable Password I

def is_acceptable_password(password: str) -> bool:

    test_phase = password.lower()
    ans = test_phase.find('password')
    if ans != -1:
        return False

    if 9 >= len(password) > 6:
        
        one_or_more_digit = False
        one_or_more_alpha = False

        for n in password:
            if n.isdigit():
                one_or_more_digit = True
            if n.isalpha():
                one_or_more_alpha = True
        
        if one_or_more_digit and one_or_more_alpha:
            return True
        else:
            return False
    elif len(password) > 9:
        
        # one_or_more_digit = False

        # for n in password:
        #     if n.isdigit():
        #         one_or_more_digit = True
        
        # if one_or_more_digit:
        #     return True
        # else:
        #     return False
        return True                
    else:
        return False


if __name__ == '__main__':
    print("Example:")
    print(is_acceptable_password('short'))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert is_acceptable_password('short') == False
    assert is_acceptable_password('short54') == True
    assert is_acceptable_password('muchlonger') == True
    assert is_acceptable_password('ashort') == False
    assert is_acceptable_password('muchlonger5') == True
    assert is_acceptable_password('sh5') == False
    assert is_acceptable_password('1234567') == False
    assert is_acceptable_password('12345678910') == True
    assert is_acceptable_password('password12345') == False
    assert is_acceptable_password('PASSWORD12345') == False
    assert is_acceptable_password('pass1234word') == True
    print("Coding complete? Click 'Check' to earn cool rewards!")