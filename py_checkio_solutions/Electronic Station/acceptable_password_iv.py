#!/usr/bin/env checkio --domain=py run acceptable-password-iv

# In this mission you need to create a password verification function.
# 
# Those are the verification conditions:
# 
# the length should be bigger than 6;should contain at least one digit, but it cannot consist of just digits;having numbers or containing just numbers does not apply to the password longer than 9.Input:A string.
# 
# Output:A bool.
# 
# 
# END_DESC

# Taken from mission Acceptable Password III

# Taken from mission Acceptable Password II

# Taken from mission Acceptable Password I

def is_acceptable_password(password: str) -> bool:
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
    print("Coding complete? Click 'Check' to earn cool rewards!")