#!/usr/bin/env checkio --domain=py run simplify-unix-path

# You can think about it as simplifying of the first argument "cd" command (a standart bash command). Simplifying means making shorter.
# 
# For instance if I docd a/../bit works the same ascd b. Which means "b" is simplifying of "a/../b". It is much easier to explain everything using examples.
# 
# Input:String. Non-Empty valid unix path.
# 
# Output:String. Unix path.
# 
# 
# END_DESC

def simplify_path(path: str):


    # remove double slash
    path = path.replace('//', '/')

    # c4 - go previous dir
    if path[0] == '/':
        root = True
        path = path.strip('/')
    else:
        root = False

    my_path = path.split('/')
    my_path = [i for i in my_path if i]

    quene = []
    for x in my_path:
        if x == '..':
            if len(quene) > 0:
                if quene[-1] != '..':
                    quene.pop()
                else:
                    quene.append(x)
            else:
                if not root:
                    quene.append(x)
        elif x == '.':
            pass    # do nothing
        else:
            quene.append(x)

    # c4a if list is empty we return 'current' path
    if not quene:
        if root:
            path = '/'
        else:
            path = '.'
    else:
        path = '/'.join(quene)
        if root:
            path = '/' + path

    # c5 replace redundant path './.'
    # path = path.replace('./.', '.')  # what should I do with this?

    return path


if __name__ == '__main__':

    print(simplify_path('.././..'))
    print(simplify_path('./.'))

    # print(simplify_path('/a/b/c/'))

    # double slash can be united in one
    # print(simplify_path('/a//b/c'))

    # double dot - go to previous folder
    # print(simplify_path('dir/fol/../no'))
    # print(simplify_path('dir/fol/../../no'))

    # one dot means current dir
    # print(simplify_path('/a/b/./ci'))
    # print(simplify_path('vi/..'))
    # print(simplify_path('./.'))

    # you can't go deeper than root folder
    # print(simplify_path('/for/../..'))
    # print(simplify_path('/for/../../no/..'))

    # not all double-dots can be simplyfied in related path
    # print(simplify_path('for/../..'))
    # print(simplify_path('../foo'))

    # These "asserts" using only for self-checking and not necessary for auto-testing

    '''
    # last slash is not important
    assert simplify_path('/a/') == '/a'

    # double slash can be united in one
    assert simplify_path('/a//b/c') == '/a/b/c'

    # double dot - go to previous folder
    assert simplify_path('dir/fol/../no') == 'dir/no'
    assert simplify_path('dir/fol/../../no') == 'no'


    # one dot means current dir
    assert simplify_path('/a/b/./ci') == '/a/b/ci'
    assert simplify_path('vi/..') == '.'
    assert simplify_path('./.') == '.'

    # you can't go deeper than root folder
    assert simplify_path('/for/../..') == '/'
    assert simplify_path('/for/../../no/..') == '/'

    # not all double-dots can be simplyfied in related path
    assert simplify_path('for/../..') == '..'
    assert simplify_path('../foo') == '../foo'
    
    print('Simply enough! Let\'s check it now!!')
    '''