#!/usr/bin/env checkio --domain=py run on-the-same-path

# You have to write a function that receives a tree – potentially large but finite –    and a list of pairs of tree's nodes.
# For each pair, you must determine if the two nodes are on a same path (True) in the tree or not (False),    then return an iterable/list of these booleans.
# 
# Input:two arguments:a tree as a tuple (a node, list of sub-trees)a list of pairs (the tuples of two nodes)
# Output:An iterable/list of booleans.
# 
# 
# 
# END_DESC

from typing import Iterable, List, Tuple, Union
Node = Union[int, str]
Tree = Tuple[Node, List['Tree']]


def on_same_path(tree: Tree, pairs: List[Tuple[Node, Node]]) -> Iterable[bool]:
    """For each given pair of tree's nodes, say if there are on a same path."""
    return [True or False for pair in pairs]


if __name__ == '__main__':
    example = on_same_path(
        ('Me', [('Daddy', [('Grandpa', []),
                           ('Grandma', [])]),
                ('Mom', [('Granny', []),
                         ('?', [])])]),
        [('Grandpa', 'Me'), ('Daddy', 'Granny')],
    )
    print('Example: it should be [True, False].')
    print(list(example))

    TESTS = (
        (
            ('Me', [('Daddy', [('Grandpa', []),
                               ('Grandma', [])]),
                    ('Mom', [('Granny', []),
                             ('?', [])])]),
            [('Grandpa', 'Me'), ('Daddy', 'Granny')],
            [True, False],
        ),
        (
            (1, [(2, [(4, []),
                      (5, [(7, []),
                           (8, []),
                           (9, [])])]),
                 (3, [(6, [])])]),
            [(1, 5), (2, 9), (2, 6)],
            [True, True, False],
        ),
        (
            (0, [(1, [(2, []),
                      (3, [])]),
                 (4, [(5, []),
                      (6, [])]),
                 (7, [(8, []),
                      (9, [])])]),
            [(4, 2), (0, 5), (2, 3), (9, 2), (6, 4), (7, 8), (8, 1)],
            [False, True, False, False, True, True, False],
        ),
    )

    for test_nb, (tree, pairs, answers) in enumerate(TESTS, 1):
        user_result = list(on_same_path(tree, pairs))
        if user_result != answers:
            print(f'You failed the test #{test_nb}.')
            print(f'Your result: {user_result}')
            print(f'Right result: {answers}')
            break
    else:
        print('Well done! Click on "Check" for real tests.')