#!/usr/bin/env checkio --domain=py run flood-area

# Your task is to simulate a flood damage.
# 
# You are given a cross-section diagram (a string).It represents slopes and flatlands by '/', '\' and '_' respectively. For example, the region of the following picture is shown by a string "/\\///\_/\/\\\\/_/\\///__\\\_\\/_\/_/".
# 
# Assume that the rain is falling endlessly and the water overflowing from the region is falling into the sea from both sides.In the following example the rain will create floods in 4, 2, 1, 19 and 9 areas respectively.
# 
# You should return a list (or an iterable) of the numbers of floods from the left side of the cross-section diagram.If there aren’t any  floods, return [] (or an empty iterable).
# 
# Input:A cross-section diagram (a string).
# 
# Output:The numbers of floods (a list/iterable of integers).
# 
# Precondition:
# 1 ≤ len(diagram) ≤ 500
# 
# The mission was taken fromAIZU ONLINE JUDGE(ALDS1_3_D: Areas on the Cross-Section Diagram).
# 
# 
# END_DESC

from typing import Iterable


def flood_area(diagram: str) -> Iterable[int]:
    return []


if __name__ == '__main__':
    print("Example:")
    print(list(flood_area(r'\\//')))
    assert list(flood_area(r'\\//')) == [4], 'valley'
    assert list(flood_area(r'/\\///\_/\/\\\\/_/\\///__\\\_\\/_\/_/')) == [4, 2, 1, 19, 9], 'mountains'
    assert list(flood_area(r'_/_\_')) == [], 'hill'

    print("Coding complete? Click 'Check' to earn cool rewards!")