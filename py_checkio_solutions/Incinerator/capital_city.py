#!/usr/bin/env checkio --domain=py run capital-city

# You are an active traveler who have visited a lot of countries. The main city in the every country is its capital and each country can have only one capital city.So your task is to create the class Capital which has some special properties: the first created instance of this class will be unique and single, and all of the other instances should be the same as the very first one.
# Also you should add thename()method which returns the name of the capital.
# In this mission you should use theSingletondesign pattern.
# 
# Example:
# ukraine_capital_1 = Capital("Kyiv")
# ukraine_capital_2 = Capital("London")
# ukraine_capital_3 = Capital("Marocco")
# ukraine_capital_2.name() == "Kyiv"
# ukraine_capital_3.name() == "Kyiv"
# 
# 
# 
# Input:The class Capital.
# 
# Output:The name of the capital.
# 
# Precondition:All data is correct.
# 
# 
# END_DESC

class Capital:
    def __init__(self, city_name):
        raise NotImplementedError

if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    ukraine_capital_1 = Capital("Kyiv")
    ukraine_capital_2 = Capital("London")
    ukraine_capital_3 = Capital("Marocco")

    assert ukraine_capital_2.name() == "Kyiv"
    assert ukraine_capital_3.name() == "Kyiv"

    assert ukraine_capital_2 is ukraine_capital_1
    assert ukraine_capital_3 is ukraine_capital_1

    print("Coding complete? Let's try tests!")