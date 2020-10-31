#!/usr/bin/env checkio --domain=py run yaml-complex-structure

# The 4th task in the series of missions about the YAML format will be devoted to a complex structure.
# 
# An array element can be another array.
# 
# 
# - Alex
# -
#   - odessa
#   - dnipro
# - Li
# 
# [
#   "Alex", 
#   [
#     "odessa", 
#     "dnipro"
#   ], 
#   "Li"
# ]
# A dictionary can also be an element of an array.
# 
# 
# - 67
# -
#   name: Irv
#   game: Mario
# -
# - 56
# 
# 
# [
#   67, 
#   {
#     "game": "Mario", 
#     "name": "Irv"
#   }, 
#   null, 
#   56
# ]
# A dictionary element can be another dictionary.
# 
# 
# name: Alex
# study:
#   type: school
#   number: 78
# age: 14
# 
# {
#   "age": 14, 
#   "study": {
#     "type": "school", 
#     "number": 78
#   }, 
#   "name": "Alex"
# }
# An array can also be an element of a dictionary.
# 
# 
# name: Alex
# study:
#   - 89
#   - 89
#   - "Hell"
# age: 14
# 
# {
#   "age": 14, 
#   "study": [
#     89, 
#     89, 
#     "Hell"
#   ], 
#   "name": "Alex"
# }
# And, of course, data can have more than one nesting level.
# 
# 
# name: Alex
# study:
#   -
#     type: school
#     num: 89
#   -
#     type: school
#     num: 12
# age: 14
# 
# {
#   "age": 14, 
#   "study": [
#     {
#       "num": 89, 
#       "type": "school"
#     }, 
#     {
#       "num": 12, 
#       "type": "school"
#     }
#   ], 
#   "name": "Alex"
# }
# Input:Format string.
# 
# Output:An object.
# 
# Precondition:The YAML 1.2 standard is being used.
# 
# 
# END_DESC

def yaml(a):
    # your code here
    return None


if __name__ == '__main__':
    print("Example:")
    print(yaml('- Alex\n'
 '-\n'
 '  - odessa\n'
 '  - dnipro\n'
 '- Li'))

    # These "asserts" are used for self-checking and not for an auto-testing
    assert yaml('- Alex\n'
 '-\n'
 '  - odessa\n'
 '  - dnipro\n'
 '- Li') == ['Alex', ['odessa', 'dnipro'], 'Li']
    assert yaml('- 67\n'
 '-\n'
 '  name: Irv\n'
 '  game: Mario\n'
 '-\n'
 '- 56') == [67,
 {'game': 'Mario', 'name': 'Irv'},
 None,
 56]
    assert yaml('name: Alex\n'
 'study:\n'
 '  type: school\n'
 '  number: 78\n'
 'age: 14') == {'age': 14,
 'name': 'Alex',
 'study': {'number': 78,
           'type': 'school'}}
    assert yaml('name: Alex\n'
 'study:\n'
 '  - 89\n'
 '  - 89\n'
 '  - "Hell"\n'
 'age: 14') == {'age': 14,
 'name': 'Alex',
 'study': [89, 89, 'Hell']}
    assert yaml('name: Alex\n'
 'study:\n'
 '  -\n'
 '    type: school\n'
 '    num: 89\n'
 '  -\n'
 '    type: school\n'
 '    num: 12\n'
 'age: 14') == {'age': 14,
 'name': 'Alex',
 'study': [{'num': 89,
            'type': 'school'},
           {'num': 12,
            'type': 'school'}]}
    assert yaml('name: Alex\n'
 'study:\n'
 '  -\n'
 '    type: school\n'
 '    nums:\n'
 '      - 12\n'
 '      - 67\n'
 '  -\n'
 '    type: school\n'
 '    num: 12\n'
 'age: 14') == {'age': 14,
 'name': 'Alex',
 'study': [{'nums': [12, 67],
            'type': 'school'},
           {'num': 12,
            'type': 'school'}]}
    print("Coding complete? Click 'Check' to earn cool rewards!")