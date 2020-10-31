#!/usr/bin/env checkio --domain=py run stressful-subject

# 
# END_DESC

def is_stressful(subj):

    # check #1 all caps
    if subj.isupper():
        return True

    exc_mark_check = subj[-3:]
    # check #2 3!!! in the end
    if exc_mark_check == "!!!":
        return True

    # 3a -- remove punctuations
    punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
    s = ""
    for i in subj:
        if i not in punctuations:
            s += i
    s = s.lower()
    print(s)

    # check #3 any list word, "help", "asap", "urgent"
    red_words = ["help", "asap", "urgent"]
    for i in red_words:
        if i in s:
            return True

    # check #4 "HELP", "help", "HeLp", "H!E!L!P!", "H-E-L-P", even in a very loooong way "HHHEEEEEEEEELLP"
    li = s.split(' ')

    for help_word in red_words:
        for j in li:
            h_idx = 0
            # print(j)
            for i in range(0, len(j)):
                if j[i] not in help_word:
                    break;
                if j[i] == help_word[h_idx]:
                    h_idx += 1
                    # print(j[i])
                    if h_idx == len(help_word):
                        return True

    return False


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    assert is_stressful("Hi") == False, "First"
    assert is_stressful("I neeed HELP") == True, "Second"
    print('Done! Go Check it!')