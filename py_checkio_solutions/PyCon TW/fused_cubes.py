#!/usr/bin/env checkio --domain=py run fused-cubes

# This is a mission to calculate the volume of objects that combines cubes.
# 
# You are given a list of cube details (tuple of 4 integers: X coordinate, Y coordinate, Z coordinate, edge length).
# 
# Each coordinate is the minimum value.All edges parallel to the coordinate axes.If the cube share the part of another cube or touch with the face of another cube,     they are considered as one object.
# You should return a list (or iterable) of the volumes of all objects.
# 
# input:A list of tuples of 4 integers.output:A list (or iterable) of integers.
# END_DESC

from typing import Tuple, List, Iterable


def fused_cubes(cubes: List[Tuple[int]])->Iterable[int]:
    return []


if __name__ == '__main__':
    assert sorted(fused_cubes([(0, 0, 0, 3), (1, 2, 2, 3)])) == [52], 'fused'
    assert sorted(fused_cubes([(0, 0, 0, 3), (1, 3, 2, 3)])) == [54], 'touch with faces'
    assert sorted(fused_cubes([(0, 0, 0, 3), (1, 3, 3, 3)])) == [27, 27], 'touch with edges'
    assert sorted(fused_cubes([(0, 0, 0, 3), (3, 3, 3, 3)])) == [27, 27], 'touch with vertices'
    assert sorted(fused_cubes([(0, 0, 0, 3), (3, 4, 3, 3)])) == [27, 27], 'separated'
    assert sorted(fused_cubes([(0, 0, 0, 3), (-2, -2, -2, 3)])) == [53], 'negative coordinates'
    print("Coding complete? Click 'Check' to earn cool rewards!")