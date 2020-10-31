#!/usr/bin/env checkio --domain=py run painting-wall

# Nicola has built a simple robot for painting of the wall.    The wall is marked at each meter and the robot has a list of painting operations.    Each operation describes which part of wall it needs to paint as a range from place to place, inclusively.    For example: the operation [1, 5] means to paint the sections from 1 to 5 meters including sections 1 and 5.    Operations are executed in the order they are placed in the list of operations.    If the range of various operations are overlapped, thenthey must be counted once.
# 
# Stephan has prepared a list of operations, but we need to check it before the robot executes its painting plan.    You are given the number of meters on the walls which need painting,    (the painted zones can be separated by non painted parts) and the list of operations prepared by Stephan,    you should determine the number of operations from this list required to paint the designated length of the wall.    If it's impossible to paint that length with the given operations, then return -1.
# 
# 
# 
# Input:Two arguments.The required length of the wall that should be painted, as integer.A list of the operations that contains the range (inclusive) as a list of two integers.
# 
# Output:The minimum number of operations. If you cannot paint enough of the length with the given operations, return -1.
# 
# Hint:To handle the beginning-end of the list, you could try running a binary search.
# 
# Precondition:
# 0 < len(operations) ≤ 30
# all(0 < x < 2 * 10 ** 18 and 0 < y < 2 * 10 ** 18 for x, y inoperations)
# 0 < required < 2 * 10 ** 18
# 
# 
# END_DESC

class Wall:
    def __init__(self):
        self._painted = []

    def painted_length(self):
        p_len = 0
        if self._painted:
            for x in self._painted:
                p_len += x[1]-x[0]+1
        return p_len

    def b_search(self, elem):
        # will return the position to insert the painting section
        s = 0
        e = len(self._painted)

        if e == 0:
            return 0
        elif e == 1:
            if self._painted[0][0] < elem[0]:
                return 1
            else:
                return 0

        # check end condition first
        if self._painted[e-1][0] < elem[0]:
            return e

        while s <= e:
            mid = (s + e) // 2
            if mid == 0:
                if elem[0] < self._painted[0][0]:
                    return 0
            if self._painted[mid][0] <= elem[0] <= self._painted[mid+1][0]:
                return mid + 1
            else:
                if elem[0] < self._painted[mid][0]:
                    e = mid - 1
                else:
                    s = mid + 1

    def point_test(self, pt: list, end: int):
        if end < pt[0]:
            return 'L'
        elif pt[0] <= end <= pt[1]:
            return 'I'
        elif pt[1] < end:
            return 'R'

    def mangle_points(self, pt, op) -> list:
        pt_stat = self.point_test(pt, op[0]) + self.point_test(pt, op[1])
        if pt_stat == 'LL':     # op all the way left (2pts)
            return [op, pt]
        elif pt_stat == 'LI':   # op crossing lhs (merge to 1 pt)
            a = [op[0], pt[1]]
            return [a, ]
        elif pt_stat == 'LR':    # op covering pt (op only, discard pt)
            return [op, ]
        elif pt_stat == 'II':    # pt covering op (pt only, discard op) # this case shouldn't happen
            return [pt, ]
        elif pt_stat == 'IR':   # op crossing rhs (merge to 1 pt)
            a = [pt[0], op[1]]
            return [a, ]
        elif pt_stat == 'RR':   # op all the way left (2pts)
            return [pt, op]

    @property
    def painted(self):
        return self._painted

    def insert_op(self, op):
        # check op if valid
        if op[0] > op[1]:
            raise

        paint_ops = len(self._painted)
        pos = self.b_search(op)

        if paint_ops == 0:
            self._painted.insert(pos, op)
        else:
            # test against sections of painted maps, outside(below, above), crossed(before/after), inside
            # check end conditions
            if pos == 0:
                pt_r = self._painted[0]
                self._painted.pop(pos)
                pt_list = self.mangle_points(pt_r, op)
                for x in pt_list[::-1]:
                    self._painted.insert(pos, x)
            elif pos == paint_ops:
                pt_l = self._painted[pos-1]
                self._painted.pop(pos-1)
                pt_list = self.mangle_points(pt_l, op)
                for x in pt_list[::-1]:
                    self._painted.insert(pos-1, x)
            else:
                pt_r = self._painted[pos]
                self._painted.pop(pos)
                pt_list = self.mangle_points(pt_r, op)
                for x in pt_list[::-1]:
                    self._painted.insert(pos, x)

                new_pos = pos - 1
                pt_l = self._painted[new_pos]
                self._painted.pop(new_pos)
                pt_r = self._painted[new_pos]
                self._painted.pop(new_pos)

                pt_list = self.mangle_points(pt_l, pt_r)
                for x in pt_list[::-1]:
                    self._painted.insert(new_pos, x)

                # check op[2]
                if pos >= len(self._painted) - 1:
                   return

                while self._painted[pos][1] > self._painted[pos+1][0]:
                    pt_l = self._painted[pos]
                    self._painted.pop(pos)
                    pt_r = self._painted[pos]
                    self._painted.pop(pos)

                    pt_list = self.mangle_points(pt_l, pt_r)
                    for x in pt_list[::-1]:
                        self._painted.insert(pos, x)

                    if pos >= len(self._painted) - 1:
                        break


def checkio(required, operations):

    wall = Wall()

    for i in range(len(operations)):
        x = operations[i]
        wall.insert_op(x)
        print(wall.painted)

        a = wall.painted_length()
        if a >= required:
            print("required ops: ", i + 1)
            return i + 1
    else:
        print("can't accomplished...")
        return -1


if __name__ == '__main__':
    # checkio(15, [[10, 20], [1, 2], [20, 30], [25, 28], [5, 10], [4, 21], [1, 6]])
    # print(checkio(30, [[1, 2], [20, 30], [25, 28], [5, 10], [4, 21], [1, 6]]))
    print(checkio(5000,
     [[8598, 9442], [4221, 4432], [4864, 5415], [1315, 1960], [9577, 10482], [8147, 8346], [6063, 6836], [24, 606],
      [6170, 7131], [1397, 2020], [4690, 5651], [5267, 5464], [8422, 8886], [5547, 5738], [5722, 6511], [6605, 6905],
      [1321, 2242], [9335, 9993], [1626, 1887], [4699, 4926]]))
    # checkio(100, [[5, 30], [1, 6]])
    # checkio(20, [[1, 5], [10, 15], [20, 25], [3, 18], [2, 24]])
    # checkio(15, [[1, 2], [20, 30], [25, 28], [5, 10], [4, 21], [1, 6]])

    # These "asserts" using only for self-checking and not necessary for auto-testing
    '''
    assert checkio(5, [[1, 5], [11, 15], [2, 14], [21, 25]]) == 1, "1st"
    assert checkio(6, [[1, 5], [11, 15], [2, 14], [21, 25]]) == 2, "2nd"
    assert checkio(11, [[1, 5], [11, 15], [2, 14], [21, 25]]) == 3, "3rd"
    assert checkio(16, [[1, 5], [11, 15], [2, 14], [21, 25]]) == 4, "4th"
    assert checkio(21, [[1, 5], [11, 15], [2, 14], [21, 25]]) == -1, "not enough"
    assert checkio(1000000011, [[1, 1000000000], [11, 1000000010]]) == -1, "large"
    print("yes")
    '''