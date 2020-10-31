#!/usr/bin/env checkio --domain=py run forgetful-prisoner

# ConsiderThe Dark Labyrinthto have been your training before taking on this challenge, young    grasshopper. Once again, you find yourself in a labyrinth. It's dark and the batteries in your    flashlight have died. Due to your preparedness, you have in your possession an ultrasound    scanner which can define the depth of passages in four directions. If you think that this will    solve all your problems, then we have some news for you. You can not remember anything and use    the scanner memory card. But it has an extremely limited capacity and can only remember 100 bits    between runs.
# 
# The labyrinth is 12x12 cells and surrounded by walls on all sides. Keep in mind, you are    surrounded by darkness, so be careful to not run into a wall. This is a "multicall" mission and    as such, your function will be called until you have solved the maze or run out of moves. For    each iteration you receive a dictionary with information about the distances of walls in four    directions: "N" - North, "S" - South, "W" - West and "E" - East. For example: if a neighbour    cell is wall, then the distance is 0. You will see the exit only when you enter the exit cell.
# 
# The second function argument is a "memory" number. For each iteration we restart the    environment, thus you cannot store data in global variables. Memory numbers are 100 bit, so they    can range from 0 (including) to 2100(excluding).
# 
# For each iteration your function should return one or several actions as a string with    directions and a memory number. Actions are described as directions: "N" - North, "S" - South,    "W" - West and "E" - East. For example: the string "NWS" describes a sequence of three moves.    The memory number is an integer 0 ≤ n < 2**100.    This number will be given in your function in    the next iteration. You run too fast so you shouldn’t make a move that would have you walk into    a wall. To make things interesting, you are limited to 300 moves (not iterations).
# 
# Input:Two arguments.    Scanner results as a dictionary and the memory number as an integer.
# 
# Output:A tuple or a list with the action string and the memory number.
# 
# Precondition:The labyrinth are surrounded by walls.
# len(maze) == 12
# all(len(row) == len(maze) for row in visible)
# 
# Special Thanks by [htamas] for the mission idea!
# 
# 
# END_DESC

def find_path(scanner, memory):
    return "SE", memory


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    DIR = {"N": (-1, 0), "S": (1, 0), "W": (0, -1), "E": (0, 1)}
    WALL = "X"
    EXIT = "E"
    EMPTY = "."
    MAX_STEP = 300

    def get_visible(maze, player):
        result = {}
        for direction, (dr, dc) in DIR.items():
            cr, cc = player
            distance = -1
            while maze[cr][cc] != WALL:
                cr += dr
                cc += dc
                distance += 1
            result[direction] = distance
        return result

    def checker(func, player, maze):
        step = 0
        memory = 0
        while True:
            result, memory = func(get_visible(maze, player), memory)
            if not isinstance(result, str) or any(ch not in DIR.keys() for ch in result):
                print("The function should return a string with directions.")
                return False
            if not isinstance(memory, int) or memory < 0 or memory >= 2 ** 100:
                print("The memory number should be an integer from 0 to 2**100.")
                return False
            for act in result:
                if step >= MAX_STEP:
                    print("You are tired and your scanner is off. Bye bye.")
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
        "XXXXXXXXXXXX",
        "X..........X",
        "X.XXXXXXXX.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.XXXXXXXX.X",
        "X.........EX",
        "XXXXXXXXXXXX",
    ]), "Simple"
    assert checker(find_path, (1, 4), [
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
    ]), "Up Down"
    assert checker(find_path, (10, 10), [
        "XXXXXXXXXXXX",
        "X..........X",
        "X.XXXXXXXX.X",
        "X.X......X.X",
        "X.X.XX.X.X.X",
        "X.X......X.X",
        "X.X......X.X",
        "X.X..E...X.X",
        "X.X......X.X",
        "X.XXXX.XXX.X",
        "X..........X",
        "XXXXXXXXXXXX",
    ]), "Left"