#!/usr/bin/env checkio --domain=py run digit-stack

# In computer science, a stack is a particular kind of data type or collection in which the principal operations in    the collection are the addition of an entity to the collection (also known as push) and the removal of an entity    (also known as pop). The relation between the push and pop operations is such that the stack is a Last-In-First-Out    (LIFO) data structure. In a LIFO data structure, the last element added to the structure must be the first one to be    removed. Often a peek, or top operation is also implemented, returning the value of the top element without removing    it.
# 
# We will emulate the stack process with Python. You are given a sequence of commands:
# - "PUSH X" -- addXin the stack, whereXis a digit.
# - "POP" -- look and remove the top position. If the stack is empty, then it returns 0 (zero) and does nothing.
# - "PEEK" -- look at the top position. If the stack is empty, then it returns 0 (zero).
# The stack can only contain digits.
# 
# You should process all commands and sum all digits which were taken from the stack ("PEEK" or "POP").    Initial value of the sum is 0 (zero).
# 
# Let's look at an example, here’s the sequence of commands:
# ["PUSH 3", "POP", "POP", "PUSH 4", "PEEK", "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]
# 
# #example-table {        border-collapse: collapse;        margin-bottom: 10px;    }    #example-table td,    #example-table th {        border: 1px #294270 solid;        padding: 4px;        font-size: 16px;        text-align: center;    }CommandStackSumPUSH 330POP0+3POP3+0PUSH 443PEEK43+4PUSH 94,97PUSH 04,9,07PEEK4,9,07+0POP4,97+0PUSH 14,9,17PEEK4,9,17+1=8Input:A sequence of commands as a list of strings.
# 
# Output:The sum of the taken digits as an integer.
# 
# Precondition:
# 0 ≤ len(commands) ≤ 20;
# all(re.match("\APUSH \d\Z", c) or с == "POP" or c == "PEEK" for c incommands)
# 
# 
# END_DESC

def digit_stack(commands):

    stack = []
    ans = 0

    for cmd in commands:
        x = cmd.split(' ')
        if x[0] in "PUSH":
            x[1] = int(x[1])
            # print("push " + str(x[1]))
            stack.insert(0, x[1])
        elif x[0] in "POP":
            # print("pop")
            if len(stack) > 0:
                ans += stack.pop(0)
        elif x[0] in "PEEK":
            # print("peek")
            if len(stack) > 0:
                ans += stack[0]

    print(ans)
    return ans


if __name__ == '__main__':
    print("Example:")
    print(digit_stack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                        "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]))
    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert digit_stack(["PUSH 3", "POP", "POP", "PUSH 4", "PEEK",
                        "PUSH 9", "PUSH 0", "PEEK", "POP", "PUSH 1", "PEEK"]) == 8, "Example"
    assert digit_stack(["POP", "POP"]) == 0, "pop, pop, zero"
    assert digit_stack(["PUSH 9", "PUSH 9", "POP"]) == 9, "Push the button"
    assert digit_stack([]) == 0, "Nothing"
    print("Coding complete? Click 'Check' to review your tests and earn cool rewards!");