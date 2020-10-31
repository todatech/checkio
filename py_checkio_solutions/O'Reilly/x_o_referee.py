#!/usr/bin/env checkio --domain=py run x-o-referee

# Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players    (X and O) who take turns marking the spaces in a 3×3 grid.    The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal rows (NW-SE and    NE-SW) wins the game.
# 
# But we will not be playing this game. You will be the referee for this games results. You are given a result of a    game and you must determine if the game ends in a win or a draw as well as who will be the winner. Make sure to    return "X"    if the X-player wins and "O" if the O-player wins. If the game is a draw, return "D".
# 
# 
# 
# A game's result is presented as a list of strings, where "X" and "O" are players' marks and "." is the empty cell.
# 
# Input:A game result as a list of strings (unicode).
# 
# Output:"X", "O" or "D" as a string.
# 
# Precondition:
# There is either one winner or a draw.
# len(game_result) == 3
# all(len(row) == 3 for row in game_result)
# 
# 
# END_DESC

from typing import List


def checkio(game_result: List[str]) -> str:
    l = game_result.copy()

    # Check rows win first
    for i in range(0, len(l)):
        w = ''
        count = 0
        for j in range(0, len(l[i])):
            c = l[i][j]
            if w != c:
                w = c
                count = 1
            else:
                count += 1

        if count == 3:
            if w == 'O' or w == 'X':
                print("row wins: " + str(i+1))
                return w

    # Check columns win now
    for i in range(0, len(l)):
        w = ''
        count = 0
        for j in range(0, len(l[i])):
           c = l[j][i]
           if w != c:
                w = c
                count = 1
           else:
                count += 1

        if count == 3:
            if w == 'O' or w == 'X':
                print("row wins: " + str(i + 1))
                return w

    # Check diagonal win now
    w = l[0][0]
    if w == l[1][1] and w == l[2][2]:
        if w == 'O' or w == 'X':
            print("diagonal #1 wins")
            return w

    w = l[0][2]
    if w == l[1][1] and w == l[2][0]:
        if w == 'O' or w == 'X':
            print("diagonal #2 wins")
            return w

    return "D"


if __name__ == '__main__':
    print("Example:")
    print(checkio(["X.O",
                   "XX.",
                   "XOO"]))
    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert checkio([
        "X.O",
        "XX.",
        "XOO"]) == "X", "Xs wins"
    assert checkio([
        "OO.",
        "XOX",
        "XOX"]) == "O", "Os wins"
    assert checkio([
        "OOX",
        "XXO",
        "OXX"]) == "D", "Draw"
    assert checkio([
        "O.X",
        "XX.",
        "XOO"]) == "X", "Xs wins again"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")