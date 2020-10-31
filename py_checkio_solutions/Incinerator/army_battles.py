#!/usr/bin/env checkio --domain=py run army-battles

# 
# END_DESC

class Warrior(object):
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
                # print("u1 is dead")
                # print("u1: " + str(unit_1.health))
                # print("u2: " + str(unit_2.health))
                return False
        else:
            # print("u2 is dead")
            # print("u1: " + str(unit_1.health))
            # print("u2: " + str(unit_2.health))
            return True


class Army:
    def __init__(self):
        self._members = []
        pass

    def add_units(self, cls , units: int):
        for x in range(0, units):
            self._members.append(cls())

    @property
    def members(self):
        return self._members

    @property
    def is_any_alive(self):
        for x in self._members:
            if x.is_alive:
                return True
        else:
            return False


class Celsius:
    def __init__(self, temperature = 0):
        self._temperature = temperature

    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    @property
    def temperature(self):
        print("Getting value")
        return self._temperature

    @temperature.setter
    def temperature(self, value):
        if value < -273:
            raise ValueError("Temperature below -273 is not possible")
        print("Setting value")
        self._temperature = value


class Battle:
    def __init__(self):
        pass

    def fight(self, army1: Army, army2: Army):
        troop1 = iter(army1.members)
        troop2 = iter(army2.members)

        unit1 = next(troop1)
        unit2 = next(troop2)

        while army1.is_any_alive or army2.is_any_alive:
            try:
                # when fight gets result, one opponent die
                # True - unit_1 wins, False - unit_2 wins
                if fight(unit1, unit2):
                    unit2 = next(troop2)
                else:
                    unit1 = next(troop1)
            except StopIteration:
                break;

        if army1.is_any_alive:
            print("army1 wins")
            return True
        elif army2.is_any_alive:
            print("army2 wins")
            return False
        else:
            return None


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing

    # fight tests
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

    # battle tests
    my_army = Army()
    my_army.add_units(Knight, 3)

    enemy_army = Army()
    enemy_army.add_units(Warrior, 3)

    army_3 = Army()
    army_3.add_units(Warrior, 20)
    army_3.add_units(Knight, 5)

    army_4 = Army()
    army_4.add_units(Warrior, 30)

    battle = Battle()

    assert battle.fight(my_army, enemy_army) == True
    assert battle.fight(army_3, army_4) == False
    print("Coding complete? Let's try tests!")