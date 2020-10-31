#!/usr/bin/env checkio --domain=py run dialogues

# The modern world is filled with means of communication - the social networks, messengers, phone calls, SMS etc.But sometimes in every communication channel a flaw can be detected and in the moments like that you think to yourself: "I should create my own messenger which won’t have problems like this one".
# In this mission you’ll get your chance.
# Your task is to create a Chat class which could help a Human(name) and Robot(serial_number) to make a conversation. This class should have a few methods:
# connect_human()- connects human to the chat.
# connect_robot()- connects robot to the chat.
# show_human_dialogue()- shows the dialog as the human sees it - as simple text.
# show_robot_dialogue()- shows the dialog as the robot perceives it - as the set of ones and zeroes. To simplify the task, just replace every vowel ('aeiouAEIOU') with "0", and the rest symbols (consonants, white spaces and special signs like ",", "!", etc.) with "1".
# Dialog for the human should be displayed like this:
# (human name) said: message text
# (robot serial number): message text
# For the robot:
# (human name) said: 11100100011
# (robot serial number) said: 100011100101
# Interlocutors should have asend()method for sending messages to the dialog.
# In this mission you could use theMediatordesign pattern.
# 
# Example:
# chat = Chat()
# karl = Human("Karl")
# bot = Robot("R2D2")
# chat.connect_human(karl)
# chat.connect_robot(bot)
# karl.send("Hi! What's new?")
# bot.send("Hello, human. Could we speak later about it?")
# chat.show_human_dialogue() == """Karl said: Hi! What's new?
# R2D2 said: Hello, human. Could we speak later about it?"""
# chat.show_robot_dialogue() == """Karl said: 101111011111011
# R2D2 said: 10110111010111100111101110011101011010011011"""
# 
# 
# 
# Input:Interlocutors and the text of messages.
# 
# Output:A dialog (the multiline string).
# 
# Precondition:2 interlocutors.
# 
# 
# END_DESC

VOWELS = "aeiouAEIOU"


def convert_fn(char):
    if char in VOWELS:
        ans = '0'
    elif char == '\n':
        ans = '\n'
    else:
        ans = '1'
    return ans


class Chat:
    _msg = []

    def __init__(self):
        self._human = None
        self._robot = None

    def connect_human(self, human):
        self._human = human
        human.login_chat(self)

    def connect_robot(self, robot):
        self._robot = robot
        robot.login_chat(self)

    def show_human_dialogue(self):
        s = ""
        for x in self._msg:
            s += "{0} said: {1}\n".format(x[0].name, x[1])
        s = s.rstrip('\n')
        print(s)
        return s

    def show_robot_dialogue(self):
        s = ""
        for x in self._msg:
            y = ''
            for i in x[1]:
                y += convert_fn(i)
            s += "{0} said: {1}\n".format(x[0].name, y)
        s = s.rstrip('\n')
        print(s)
        return s

    def add_message(self, user, text):
        self._msg.append((user, text))


class User(object):
    def __init__(self, name):
        self._name = name
        self._chatroom = None

    @property
    def name(self):
        return self._name

    def login_chat(self, chatroom):
        self._chatroom = chatroom

    def send(self, text):
        self._chatroom.add_message(self, text)


class Human(User):
    def __init__(self, name):
        super().__init__(name)


class Robot(User):
    def __init__(self, name):
        super().__init__(name)



if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    chat = Chat()
    karl = Human("Karl")
    bot = Robot("R2D2")
    chat.connect_human(karl)
    chat.connect_robot(bot)
    karl.send("Hi! What's new?")
    bot.send("Hello, human. Could we speak later about it?")
    assert chat.show_human_dialogue() == """Karl said: Hi! What's new?
R2D2 said: Hello, human. Could we speak later about it?"""
    assert chat.show_robot_dialogue() == """Karl said: 101111011111011
R2D2 said: 10110111010111100111101110011101011010011011"""

    print("Coding complete? Let's try tests!")