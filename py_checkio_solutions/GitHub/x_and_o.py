#!/usr/bin/env checkio --domain=py run x-and-o

# Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O) who take    turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their respective    marks in a horizontal, vertical, or diagonal row (NW-SE and NE-SW) wins the game. Maybe you've    solve"Xs and Os Referee"already and this mission will be simpler for you.
# 
# In this mission, you will play against various bots, your goal is to never lose. You may only    achieve wins or draws. For each game your function is called several times (in the same    environment) for each move until the game is over.
# 
# For each step your function receives a grid state as a sequence of strings, where "X" is a    X-mark, "O" is an O-mark and "." is an empty cell. The second argument is for your mark, either    "X" or "O". For each move your function should return the coordinates of the your next mark as a    sequence of two numbers - row and column. Rows and columns are numbered starting from zero.
# 
# Input:Two arguments. A grid state as a tuple of strings (unicode) and    your mark as a string "X" or "O".
# 
# Output:The coordinates of your move as a list or a tuple of two integers from    0 to 2.
# 
# 
# Precondition:
# len(grid) == 3
# all(all(ch in "XO." for ch in row) and len(row) == 3 for row in grid)
# 
# 
# END_DESC

def x_and_o(grid, your_mark):
    return 1, 1


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    from random import choice

    def random_bot(grid, mark):
        empties = [(x, y) for x in range(3) for y in range(3) if grid[x][y] == "."]
        return choice(empties) if empties else (None, None)

    def referee(field):
        lines = (["".join(row) for row in field] + ["".join(row) for row in zip(*field)] +
                 [''.join(row) for row in zip(*[(r[i], r[2 - i]) for i, r in enumerate(field)])])
        if "X" * 3 in lines:
            return "X"
        elif "O" * 3 in lines:
            return "O"
        elif not "." in "".join(lines):
            return "D"
        else:
            return "."

    def check_game(user_func, user_mark, bot_mark, bot_algorithm=random_bot):
        grid = [["."] * 3 for _ in range(3)]
        if bot_mark == "X":
            x, y = bot_algorithm(grid, bot_mark)
            grid[x][y] = "X"
        while True:
            user_result = user_func(tuple("".join(row) for row in grid), user_mark)
            if (not isinstance(user_result, (tuple, list)) or len(user_result) != 2 or
                    not all(isinstance(u, int) and 0 <= u < 3 for u in user_result)):
                print("The result must be a list/tuple of two integers from 0 to 2.")
                return False

            if grid[user_result[0]][user_result[1]] != ".":
                print("You tried to mark the filled cell.")
                return False
            grid[user_result[0]][user_result[1]] = user_mark
            game_result = referee(grid)

            if game_result == "D" or game_result == user_mark:
                return True
            bot_move = bot_algorithm(grid, bot_mark)
            grid[bot_move[0]][bot_move[1]] = bot_mark
            game_result = referee(grid)
            if game_result == bot_mark:
                print("Lost :-(")
                return False
            elif game_result == "D":
                return True

    assert check_game(x_and_o, "X", "O"), "Random X"
    assert check_game(x_and_o, "O", "X"), "Random O"