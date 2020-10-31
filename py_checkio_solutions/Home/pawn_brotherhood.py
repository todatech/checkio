#!/usr/bin/env checkio --domain=py run pawn-brotherhood

# 
# END_DESC

def safe_pawns(pawns: set) -> int:
    # row == rank, column == file
    # find safe pawns -- only exist if lower rank protecting upper rank

    safe_spots = []
    print(pawns)

    for i in pawns:
        # determine ranks first
        if int(i[1]) + 1 <= 8:
            higher_rank = int(i[1]) + 1

            # check left
            if ord(i[0])-1 >= ord('a'):
                safe_left = str(chr(ord(i[0])-1)) + str(higher_rank)
                safe_spots.append(safe_left)

            # check right
            if ord(i[0])+1 <= ord('h'):
                safe_right = str(chr(ord(i[0])+1)) + str(higher_rank)
                safe_spots.append(safe_right)
        else:
            continue
    print(safe_spots)

    safe_count = 0
    for i in pawns:
        if i in safe_spots:
            safe_count += 1
    print(safe_count)

    return safe_count

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert safe_pawns({"b4", "d4", "f4", "c3", "e3", "g5", "d2"}) == 6
    assert safe_pawns({"b4", "c4", "d4", "e4", "f4", "g4", "e5"}) == 1
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!")