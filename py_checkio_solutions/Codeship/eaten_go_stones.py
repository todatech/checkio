#!/usr/bin/env checkio --domain=py run eaten-go-stones

# A quite unbelievable event has occurred several years ago, in the spring of 2016 - the computer programAlphaGo, developed by Google DeepMind, won against the world's best player in theGo gamewith the result 4-1. Until the very last moment nobody believed that the computer can beat a man in the ancient Japanese game, in which the quantity of possible variants is greater than the number of atoms in the whole Universe!
# 
# Unlike chess, where every player from the very beginning of the game has the full set of figures on the 8x8 board, and can analyse all moves just by using the estimation strategy, the Go game requires very different skills. First of all, this game uses the board which is almost  6 times greater than the chessboard - 361 game points against only 64 in chess. Secondly, the game begins with an absolutely empty board and till the middle of it your success is based strictly on your intuition and the sense of the harmonious placement of stones.
# Regardless, due to the machine learning and the huge number of games AlphaGo has played with itself, the program became stronger than a man.
# 
# In this mission you'll learn how to analyze the board situation along with the basic rules of the Go game. Here are some of them:
# - 2 men play with stones (game figures) of different colors;
# - the stones are put on the intersections;
# - every stone or the group of stones has a certain degree of freedom or 'liberties' - dame (traditional Japanese word for this term). These are the points which contact with the stone/group horizontally and vertically;
# - the whole group is a group of stones that contact with each other horizontally and vertically. The group has mutual 'liberties';
# - if all 'liberties' of the stone or the group are blocked/closed by the stones of the other player - these stones are being "eaten" and removed from the board.
# Here is a demonstration of the 'liberties' concept.
# 
# 
# 
# In this mission your task is to count how many stones of each color have been 'eaten'.The input will be a two-dimensional array - the list of the strings, where the empty intersections will be '+', the black stones - 'B' and the white stones - 'W' (black & white are the traditional colors for this game). You should return the answer in the dictionary format, like this: {'B': n, 'W': m}, where n and m are the amount of black and white stones which have been 'eaten'. For example, if there have been eaten 3 black stones, and 4 white, the answer will be: {'B': 3, 'W': 4}.
# 
# 
# 
# Input:A two-dimensional array (the list of the strings).
# 
# Output:Dictionary with the amount of the 'eaten' stones of each color.
# 
# Precondition:
# Board - 9х9, 7x7, 5x5
# 
# 
# END_DESC

def go_game(board):
    #replace this for solution
    return board

if __name__ == '__main__':
    print("Example:")
    print(go_game(['++++W++++',
                   '+++WBW+++',
                   '++BWBBW++',
                   '+W++WWB++',
                   '+W++B+B++',
                   '+W+BWBWB+',
                   '++++BWB++',
                   '+B++BWB++',
                   '+++++B+++']))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert go_game(['++++W++++',
                    '+++WBW+++',
                    '++BWBBW++',
                    '+W++WWB++',
                    '+W++B+B++',
                    '+W+BWBWB+',
                    '++++BWB++',
                    '+B++BWB++',
                    '+++++B+++']) == {'B': 3, 'W': 4}
    print("Coding complete? Click 'Check' to earn cool rewards!")