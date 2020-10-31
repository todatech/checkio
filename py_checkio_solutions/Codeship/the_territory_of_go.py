#!/usr/bin/env checkio --domain=py run the-territory-of-go

# This is the second mission about theGo game. The first one is theEaten Go Stones.
# In this mission you'll learn how to count territory in the Go. Pay attention that this mission is simplified compared to the real game and its rules (the tests won't have cases where stones of one color are on the territory of the other player).
# 
# So what is the territory in the Go game? It’s all unoccupied points which are surrounded by the complete and solid stone border consisting of stones of the same color. It can be a form in the center of the board which creates the border by using just the stones, or it can also be the form positioned near the edge of the board which uses it to complete the boundary. The complete and solid boundary is considered to be the one that consists of the stones connected to each other only vertically and horizontally. Also it should be 'closed'.
# Look at the picture below. It displays the input data and the conception of the 'territory':
# 
# 
# 
# Your task is to count the territory that belongs to each player. For this example the answer is: {'B': 13, 'W': 12}.
# 
# Input:Two-dimensional array (the list of the strings).
# 
# Output:Dictionary with the amount of each player's territory.
# 
# Precondition:
# Board - 9х9, 7x7, 5x5
# 
# 
# END_DESC

def territory(board):
    #replace this for solution
    return board

if __name__ == '__main__':
    print("Example:")
    print(territory(['++B++++++',
                     '+BB++++++',
                     'BB+++++++',
                     '+++++++++',
                     '+++++++++',
                     '++WWW++++',
                     '++W+W++++',
                     '++WWW++++',
                     '+++++++++']))

    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert territory(['++B++++++',
                      '+BB++++++',
                      'BB+++++++',
                      '+++++++++',
                      '+++++++++',
                      '++WWW++++',
                      '++W+W++++',
                      '++WWW++++',
                      '+++++++++']) == {'B': 3, 'W': 1}
    print("Coding complete? Click 'Check' to earn cool rewards!")