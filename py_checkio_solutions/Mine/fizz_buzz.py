#!/usr/bin/env checkio --domain=py run fizz-buzz

# "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.
# 
# You should write a function that will receive a positive integer and return:
# "Fizz Buzz"if the number is divisible by 3 and by 5;
# "Fizz"if the number is divisible by 3;
# "Buzz"if the number is divisible by 5;
# The numberas a string for other cases.
# 
# 
# Input:A number as an integer.
# 
# Output:The answer as a string.
# 
# Precondition:0 < number ≤ 1000
# 
# 
# END_DESC

def checkio(number: int) -> str:

    if number % 3 == 0:
        div_by_three = True
    else:
        div_by_three = False

    if number % 5 == 0:
        div_by_five = True
    else:
        div_by_five = False

    result = ''

    if div_by_three:
        result += "Fizz"

    if div_by_five:
        if result:
            result += " " + "Buzz"
        else:
            result += "Buzz"

    if not div_by_five and not div_by_three:
        result = str(number)

    print(result)

    # replace this for solution
    return result



# These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    print('Example:')
    print(checkio(15))
    
    assert checkio(15) == "Fizz Buzz", "15 is divisible by 3 and 5"
    assert checkio(6) == "Fizz", "6 is divisible by 3"
    assert checkio(5) == "Buzz", "5 is divisible by 5"
    assert checkio(7) == "7", "7 is not divisible by 3 or 5"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")