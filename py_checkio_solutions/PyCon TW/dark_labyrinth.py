#!/usr/bin/env checkio --domain=py run dark-labyrinth

# Do you remember the classic missionOpen Labyrinth?    Well, you once again find yourself inside a labyrinth, but the lights are out and you cannot see    the full map. You have flashlight and know that all passages in the Labyrinth are directed along    South-North and East-West lines. You don't yet know your position or the location of the exit.    You must hurry as you cannot run forever.
# 
# This is a "multicall" mission and as such, your function will be called until you have solved    the maze or run out of moves. For each iteration you see a part of the labyrinth in four    directions (function input). You can see passages and where they have crossings and turns. If    it’s in your range of vision, you’ll see the exit too. The visible zones are represented as a    grid as a tuple of strings, where"X" is a wall, "." is a passage cell, "?" is unknown, "P" is player and "E" is the exit.Grids are represented as 2D rectangular arrays. The size is related    to size of the visible zone.
# 
# For each iteration your function should return one or several actions as a string with    directions. Actions are described as directions: "N" - North, "S" - South, "W" - West and "E" -    East. For example: the string "NWS" describes a sequence of three moves. The walls are coated in    a weird slime so you shouldn’t make a move that would have you walk into a wall. To make things    interesting, you are limited to 250 moves (not iterations). You can use global variables between    iterations.
# 
# 
# 
# For example on the image you can see the full labyrinth and that will be visible for player.    And your function will receive:
# 
# 
# ("???XXX",
#  "???...",
#  "???X.X",
#  "XXXX.X",
#  "X...PX",
#  "XXXX.X",
#  "???X.X",
#  "???...",
#  "???X.X",
#  "???X.X",
#  "???..X",
#  "???XXX")
# Input:A visible part as a tuple of strings.
# 
# Output:An action or several actions as a string.
# 
# Precondition:
# The labyrinth are surrounded by walls.
# All passages are narrow (1 cell width)
# 3 < len(visible) ≤ 15
# all(len(row) == len(visible[0]) for row in visible)
# 
# 
# END_DESC

def find_path(visible):
    return "S" or "N" or "W" or "E" or "SNEW"


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    DIR = {"N": (-1, 0), "S": (1, 0), "W": (0, -1), "E": (0, 1)}
    PLAYER = "P"
    WALL = "X"
    UNKNOWN = "?"
    EXIT = "E"
    EMPTY = "."
    MAX_STEP = 250

    def clear_zone(zone):
        return [row for row in zone if not all(el == UNKNOWN for el in row)]

    def get_visible(maze, player):
        grid = [["?" for _ in range(len(row))] for row in maze]
        grid[player[0]][player[1]] = PLAYER
        for direction, diff in DIR.items():
            r, c = player
            while maze[r][c] != WALL:
                r, c = r + diff[0], c + diff[1]
                grid[r][c] = maze[r][c]
                if direction in "NS":
                    grid[r + DIR["W"][0]][c + DIR["W"][1]] = maze[r + DIR["W"][0]][c + DIR["W"][1]]
                    grid[r + DIR["E"][0]][c + DIR["E"][1]] = maze[r + DIR["E"][0]][c + DIR["E"][1]]
                else:
                    grid[r + DIR["S"][0]][c + DIR["S"][1]] = maze[r + DIR["S"][0]][c + DIR["S"][1]]
                    grid[r + DIR["N"][0]][c + DIR["N"][1]] = maze[r + DIR["N"][0]][c + DIR["N"][1]]
        grid = clear_zone(list(zip(*clear_zone(grid))))
        return tuple("".join(trow) for trow in zip(*grid))

    def initial(maze, player):
        return maze, get_visible(maze, player)

    def checker(func, player, maze):
        step = 0
        while True:
            result = func(get_visible(maze, player))
            if not isinstance(result, str) or any(ch not in DIR.keys() for ch in result):
                print("The function should return a string with directions.")
                return False

            for act in result:
                if step >= MAX_STEP:
                    print("You are tired and your flashlight is off. Bye bye.")
                    return False
                r, c = player[0] + DIR[act][0], player[1] + DIR[act][1]
                if maze[r][c] == WALL:
                    print("BAM! You in the wall at {}, {}.".format(r, c))
                    return False
                elif maze[r][c] == EXIT:
                    print("GRATZ!")
                    return True
                else:
                    player = r, c
                    step += 1

    assert checker(find_path, (1, 1), [
        "XXXXXXX",
        "X.....X",
        "X.X.X.X",
        "X.....X",
        "X.X.X.X",
        "X.X.E.X",
        "XXXXXXX",
    ]), "Simple"
    assert checker(find_path, (1, 4), [
        "XXXXXXXXXX",
        "X....X...X",
        "X.XXXX.X.X",
        "X....X.X.X",
        "X.XXXX.X.X",
        "X.X....X.X",
        "X.XXEX.X.X",
        "X.XXXXXX.X",
        "X........X",
        "XXXXXXXXXX",
    ]), "First"
    assert checker(find_path, (10, 10), [
        "XXXXXXXXXXXX",
        "XX...X.....X",
        "X..X.X.X.X.X",
        "X.XX.X.X.X.X",
        "X..X.X.X.X.X",
        "XX.X.X.X.X.X",
        "X..X.X.X.X.X",
        "X.XX.X.X.X.X",
        "X..X.X.X.X.X",
        "XX.X.X.X.X.X",
        "XE.X.....X.X",
        "XXXXXXXXXXXX",
    ]), "Up down"