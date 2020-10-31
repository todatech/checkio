#!/usr/bin/env checkio --domain=py run probably-dice

# You're on your way to a board game convention.    Chances are there’ll be some stiff competition,    so you decide to learn more about dice probabilities since you suspect you'll be rolling a lot of them soon.
# 
# Typically, when using multiple dice, you simply roll them and sum up all the result.    To get started with your investigation of dice probability, write a function that takes the number of dice,    the number of sides per die and a target number and    returns the probability of getting a total roll of exactly the target value.    The result should be given with four digits precision as ±0.0001.    For example, if you roll 2 six-sided dice, the probability of getting exactly a 3 is 2/36 or 5.56%,    which you should return as ≈0.0556.
# 
# 
# 
# For each test, assume all the dice are the same and are numbered from 1 to the number of sides, inclusive.    So a 4-sided die (D4)  would have an equal chance of rolling a 1, 2, 3 or 4.    A 20-sided die (D20) would have an equal chance of rolling any number from 1 to 20.
# 
# Tips:Be careful if you want to use a brute-force solution -- you could have a very, very long wait for edge cases.
# 
# Input:Three arguments. The number of dice, the number of sides per die and the target number as integers.
# 
# Output:The probability of getting exactly target number on a single roll of the given dice as a float.
# 
# Example:
# 
# 
# probability(2, 6, 3) == 0.0556  # 2 six-sided dice have a 5.56% chance of totalling 3
# probability(2, 6, 4) == 0.0833
# probability(2, 6, 7) == 0.1667
# probability(2, 3, 5) == 0.2222  # 2 three-sided dice have a 22.22% chance of totalling 5
# probability(2, 3, 7) == 0       # The maximum you can roll on 2 three-sided dice is 6
# probability(3, 6, 7) == 0.0694
# probability(10, 10, 50) == 0.0375
# Preconditions:
# 1 ≤dice_number≤ 10
# 2 ≤sides≤ 20
# 0 ≤target< 1000
# 
# 
# END_DESC

table = dict()


def comb(dice_number: int, sides: int, target: int) -> int:
    min_outcome = dice_number * 1
    max_outcome = dice_number * sides

    if target > max_outcome:
        return 0
    if target < min_outcome:
        return 0

    result = 0
    if dice_number == 1:
        return 1
    else:
        upper_target = target - 1
        if (upper_target - sides) > 0:
            lower_target = upper_target - sides
        else:
            lower_target = 0

        for i in range(upper_target, lower_target, -1):
            s = (dice_number, i)
            if not s in table:
                table[s] = comb(dice_number - 1, sides, i)
                a = table[s]
            else:
                a = table[s]
            result += a
            # print("f: {0}, {1}, {2}, {3}".format(dice_number-1, sides, i, a))

    return result




def probability(dice_number, sides, target):

    min_outcome = dice_number * 1
    max_outcome = dice_number * sides

    if target > max_outcome:
        return 0.0
    if target < min_outcome:
        return 0.0

    max_combination = sides ** dice_number
    table.clear()
    target_combo = comb(dice_number, sides, target)
    ans = target_combo/max_combination
    print(ans)
    return ans



if __name__ == '__main__':
    #These are only used for self-checking and are not necessary for auto-testing
    def almost_equal(checked, correct, significant_digits=4):
        precision = 0.1 ** significant_digits
        return correct - precision < checked < correct + precision
        
    assert(almost_equal(probability(2, 6, 3), 0.0556)), "Basic example"
    assert(almost_equal(probability(2, 6, 4), 0.0833)), "More points"
    assert(almost_equal(probability(2, 6, 7), 0.1667)), "Maximum for two 6-sided dice"
    assert(almost_equal(probability(2, 3, 5), 0.2222)), "Small dice"
    assert(almost_equal(probability(2, 3, 7), 0.0000)), "Never!"
    assert(almost_equal(probability(3, 6, 7), 0.0694)), "Three dice"
    assert(almost_equal(probability(10, 10, 50), 0.0375)), "Many dice, many sides"