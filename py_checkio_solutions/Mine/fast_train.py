#!/usr/bin/env checkio --domain=py run fast-train

# You are planning the train schedule and you want to know the minimum time between the stations.
# 
# Each section of the rail between stations is given in the list.Each section is a tuple of distance and speed limit (both are integers).You can change the speed ( +1. -1 and ± 0 ) at the start and every minute after that.The train runs by the same amount as the speed value in a minute.
# Note: This means that a train with a speed of 2 will travel a distanse of 2 before another minute passes and its speed can be changed again.
# 
# Starting speed is 0.Speed limit is set for each section of the rail.        You don't exceed it.You must reach the target station at speed 1 (because it’s necessary to stop at the station).You should return the minimum time (minutes) as an integer.
# 
# 
# 
# Input:List of the section of the rail. Each section is a tuple of distance (as an integer) and speed limit (as an integer).
# 
# Output:The minimum time (minutes) as an integer.
# 
# How it is used:
# For efficient acceleration and deceleration.
# 
# Precondition:
# distance > 0speed limit > 0len(section) > 0
# 
# 
# END_DESC

from typing import List

def fast_train(sections: List[List[int]]) -> int:
    return 0

if __name__ == '__main__':
    print("Example:")
    print(fast_train([(4, 3)]))

    assert fast_train([(4, 3)]) == 3
    assert fast_train([(9, 10)]) == 5
    assert fast_train([(5, 5), (4, 2)]) == 6
    print("Coding complete? Click 'Check' to earn cool rewards!")