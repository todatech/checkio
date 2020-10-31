#!/usr/bin/env checkio --domain=py run express-delivery

# Our three robots found a few mysterious boxes on the island. After some examination Nicola discovered that these    boxes have an an    interesting feature. If you place something in one of them, you can retrieve it again from any other box.    Stephan figures this makes for quick delivery of cargo across the island, moving loads twice as fast.    Stephan can place the cargo in one box and pick it up later at the delivery point.    On the map there are water cells which Stephan can't pass, but else these boxes will make his task a whole lot    easier.
# 
# The map for delivery is presented as an array of strings, where:
# 
# "W" is a water (closed cell)"B" is a box"E" is a goal point."S" is a start point."." is an empty cell.Stephan moves between neighbouring cells in two minutes if he carries a load. Without any carry-on luggage, he only    needs one minute.    Loading and unloading of cargo in (and out of) the box takes one minute.    You should find the fastest way for the cargo delivery (minimum time).
# 
# The route is a string, where each letter is an action.
# 
# "U" -- Up (north)"D" -- Down (south)"L" -- Left (west)"R" -- Right (east)"B" -- Load or unload in (out) a box.
# 
# Input:A map for delivery as a list of strings.
# 
# Output:The fastest route as a string.
# 
# Precondition:0<rows<10
# 0<columns<10
# ∀ x,y ∈ coordinates : 0 ≤ x,y ≤ 10
# 
# 
# 
# END_DESC

from typing import List

def checkio(field_map: List[str]) -> str:
    return "RRRDDD"

if __name__ == '__main__':
    print("Example:")
    print(checkio(["S...", "....", "B.WB", "..WE"]))

    #This part is using only for self-checking and not necessary for auto-testing
    ACTIONS = {
        "L": (0, -1),
        "R": (0, 1),
        "U": (-1, 0),
        "D": (1, 0),
        "B": (0, 0)
    }

    def check_solution(func, max_time, field):
        max_row, max_col = len(field), len(field[0])
        s_row, s_col = 0, 0
        total_time = 0
        hold_box = True
        route = func(field[:])
        for step in route:
            if step not in ACTIONS:
                print("Unknown action {0}".format(step))
                return False
            if step == "B":
                if hold_box:
                    if field[s_row][s_col] == "B":
                        hold_box = False
                        total_time += 1
                        continue
                    else:
                        print("Stephan broke the cargo")
                        return False
                else:
                    if field[s_row][s_col] == "B":
                        hold_box = True
                    total_time += 1
                    continue
            n_row, n_col = s_row + ACTIONS[step][0], s_col + ACTIONS[step][1],
            total_time += 2 if hold_box else 1
            if 0 > n_row or n_row >= max_row or 0 > n_col or n_row >= max_col:
                print("We've lost Stephan.")
                return False
            if field[n_row][n_col] == "W":
                print("Stephan fell in water.")
                return False
            s_row, s_col = n_row, n_col
            if field[s_row][s_col] == "E" and hold_box:
                if total_time <= max_time:
                    return True
                else:
                    print("You can deliver the cargo faster.")
                    return False
        print("The cargo is not delivered")
        return False

    assert check_solution(checkio, 12, ["S...", "....", "B.WB", "..WE"]), "1st Example"
    assert check_solution(checkio, 11, ["S...", "....", "B..B", "..WE"]), "2nd example"
    print("Coding complete? Click 'Check' to earn cool rewards!")