#!/usr/bin/env checkio --domain=py run tree-walker

# This summer the 4th annualPyBayconference dedicated to Python development was held.    One of the speakers wasRaymond Hettinger,    a member of the Python Software Foundation (PFS) since 2003, a member of the PFS board of directors from 2008 to 2012.    Raymond's merits in the PFS are very significant: he worked on creating sets (data type), generator expressions,    "collections" and "itertools" modules, as well as an ordered dict. He's also well known for his contributions    to the Python Cookbook.
# 
# Raymond's presentation was called "The Mental Game of Python".    You can watch the entire recording of the presentationhere.    Raymond demonstrated using various strategies to simplify the development process and make the code simpler and therefore better.    This mission is a variation of a data tree traversal task used by Raymond to demonstrate an incremental development approach.
# 
# In computer science, atreeis an abstract data type that simulates a hierarchical tree structure.    All tree elements are callednodes. The lines connecting elements (or nodes) are calledbranchesand nodes without children are calledleavesorend-nodes.    The topmost node in a tree is called theroot node.Depthis the distance between a node and the root.    Additionally, every node in a tree can be seen as the root node of thesubtreerooted at that node.
# 
# 
# 
# 
# 
# In this mission you are given an arbitrary finite tree and a target. In case the target's type isintorstryour task is to calculate how many leaves of the tree are equal to the target.    Otherwise, if the target's type islistordictyou need to calculate the number of subtrees which are equal to the target.
# 
# For a better understanding, have a look at the illustrations below (visual order matters for lists).    If encounter difficulties, try to watch this part of thevideoexposing the use of the incremental development approach.
# 
# Input:Two arguments:the first is an arbitrary finitetreedata structurethe second is atarget, any type of [int, str, list, dict]
# 
# Output:The number (integer) of the leaves or subtrees that are equal to the given target.
# 
# 
# 
# Precondition:
# n ∈ [1; 100] - nodes numberany node of a given tree may be any type of [int, str, list, dict]
# 
# 
# END_DESC

def tree_walker(tree, target):

    # your code here
    return 0


if __name__ == '__main__':
    print("Example:")
    print(tree_walker([1, "2", 3, [[3], 1, {1: "one"}]], 1))
    
    # These "asserts" are used for self-checking and not for an auto-testing
    assert tree_walker([1, "2", 3, [[3], 1, {1: "one"}]], 1) == 2, "1st"
    assert tree_walker({"one": 1, "two": [{1: "one", 2: "two"}, 1, "1", "one"]}, 1) == 2, "2nd"
    assert tree_walker({"one": [1, 2], "two": [{1: "one", 2: "two"}, [1, 2], "1", "one"]}, [1, 2]) == 2, "3rd"
    assert tree_walker(5, 5) == 1, "4th"
    assert tree_walker([5, 6, 2, "1"], 1) == 0, "5th"
    assert tree_walker([[dict()], [[[3], [3, 5]]], [], []], 3) == 2, "6th"
    assert tree_walker([{1: "one"}, {2: "two"}, "two", ["two", {"two": "one"}]], "two") == 3, "7th"
    print("Coding complete? Click 'Check' to earn cool rewards!")