#!/usr/bin/env checkio --domain=py run the-warriors

# 
# END_DESC

class Warrior:
    def __init__(self):
        self.health = 50
        self.attack = 5

    def damage(self, opponent):
        opponent.health -= self.attack

    @property
    def is_alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def __str__(self):
        return "health: " + str(self.health) + "attack: " + str(self.attack)


class Knight(Warrior):
    def __init__(self, **kwargs):
        super(Knight, self).__init__()
        self.attack = 7


def fight(unit_1, unit_2):

    while unit_1.is_alive and unit_2.is_alive:
        # Unit 1 attack unit 2
        unit_1.damage(unit_2)
        if unit_2.is_alive:
            # unit 2 attack unit 1
            unit_2.damage(unit_1)
            if unit_1.is_alive:
                pass
            else:
                print("u1 is dead")
                print("u1: " + str(unit_1.health))
                print("u2: " + str(unit_2.health))
                return False
        else:
            print("u2 is dead")
            print("u1: " + str(unit_1.health))
            print("u2: " + str(unit_2.health))
            return True


if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing

    chuck = Warrior()
    bruce = Warrior()
    carl = Knight()
    dave = Warrior()
    mark = Warrior()

    assert fight(chuck, bruce) == True
    assert fight(dave, carl) == False
    assert chuck.is_alive == True
    assert bruce.is_alive == False
    assert carl.is_alive == True
    assert dave.is_alive == False
    assert fight(carl, mark) == False
    assert carl.is_alive == False

    print("Coding complete? Let's try tests!")