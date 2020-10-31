#!/usr/bin/env checkio --domain=py run 88th-puzzle

# p.quote-source {        float: right;        font-size: 10px;    }Dr. Emmett Brown: If my calculations are correct, when this baby hits 88 miles per hour...        you're gonna see some serious shit.
# 
# ===
# 
# Marty McFly: Hey, Doc, we better back up. We don't have enough road to get up to 88.
# Dr. Emmett Brown: Roads? Where we're going, we don't need roads.
# 
# "Back to the Future" (1985)
# 
# According to ancient Chinese legend, 88 is a magic number. On the 88th page of the book, "Ancient human puzzles    catalog for modern robots", you will find a puzzle which Nikola’s archaeologist uncle discovered a very long time    ago    in an ancient human magazine. Nikola has been trying to solve this puzzle since he first rolled off his parents    assembly line, and now it’s time for us to help him figure this out once and for all.
# 
# The puzzle looks like four intersecting circles with 12 colored marbles: 2 red, 2 blue, 2 green, 2 orange and 4    grey. Take a look at the illustration to see how this setup works. The marbles should be placed as it shown below.    Each hole and color has a number for data representing a state. Colored numbers: 1 - blue, 2 - green, 3 - red, 4 -    orange, 0 - grey. The initial state (or completed) will be represented as the sequence of numbers, where an index is    a “hole” number:
# (1, 2, 1, 0, 2, 0, 0, 3, 0, 4, 3, 4).
# 
# 
# 
# You can rotate the rings clockwise. Each move rotates the ring by 90 degrees. The rings are numbered and sequence of    action should be represented as a list/tuple of numbers from 1 to 4.
# 
# You are given a twisted puzzle state as a tuple of numbers. You should return it to the initial state with the    minimal number of steps. For example, the state in the picture below would be represented as    (0,2,1,3,2,1,4,0,0,4,0,3) and can be solved in 4 steps "1433" or "4133".    The first means "rotate 1st ring one time (by 90 degrees of course), 4th - one time, 3th - two times.
# 
# 
# 
# Input:A puzzle state as a tuple of integers.
# 
# Output:The shortest solution as a string.
# 
# Precondition:
# len(state) == 12
# all(0 ≤ n ≤ 4 for n in state)
# All test cases are solvable.
# 
# 
# END_DESC

GOAL =  (1, 2, 1, 0, 2, 0, 0, 3, 0, 4, 3, 4)


def puzzle88(state):
    return ""


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert puzzle88((0, 2, 1, 3, 2, 1, 4, 0, 0, 4, 0, 3)) in ('1433', '4133'), "Example"
    assert puzzle88((0, 2, 1, 2, 0, 0, 4, 1, 0, 4, 3, 3)) in ('4231', '4321'), "Rotate all"
    assert puzzle88((0, 2, 1, 2, 4, 0, 0, 1, 3, 4, 3, 0)) in ('2314', '2341', '3214', '3241'), "Four paths"