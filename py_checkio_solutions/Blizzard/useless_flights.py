#!/usr/bin/env checkio --domain=py run useless-flights

# This task is a continuation of the“Cheapest Flights”mission.
# 
# Here you have a flight schedule by which you need to find out whether all flights are really necessary.
# 
# For example: If from the point A to point C you can fly directly for $ 100, but you can also go through the point B (from A to B, and then from B to C) for $ 90, then connection A – C isn’t really needed. But if the price from A to C is $ 90 or less, then this connection remains on the schedule.
# 
# Input:An array of all possible connections. Each element in the array is also an array of 3 elements: the first city, second city and flight price.
# 
# Output:An array of the unnecessary flight indices.
# 
# 
# END_DESC

from typing import List
def useless_flight(schedule: List) -> List:
    # your code here
    return None


if __name__ == '__main__':
    print("Example:")
    print(useless_flight([['A', 'B', 50],
  ['B', 'C', 40],
  ['A', 'C', 100]]))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert useless_flight([['A', 'B', 50],
  ['B', 'C', 40],
  ['A', 'C', 100]]) == [2]
    assert useless_flight([['A', 'B', 50],
  ['B', 'C', 40],
  ['A', 'C', 90]]) == []
    assert useless_flight([['A', 'B', 50],
  ['B', 'C', 40],
  ['A', 'C', 40]]) == []
    assert useless_flight([['A', 'C', 10],
  ['C', 'B', 10],
  ['C', 'E', 10],
  ['C', 'D', 10],
  ['B', 'E', 25],
  ['A', 'D', 20],
  ['D', 'F', 50],
  ['E', 'F', 90]]) == [4, 7]
    print("Coding complete? Click 'Check' to earn cool rewards!")