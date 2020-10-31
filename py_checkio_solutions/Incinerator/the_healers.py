#!/usr/bin/env checkio --domain=py run the-healers

# 
# END_DESC

# Taken from mission The Lancers

class Warrior(object):
    def __init__(self, *args, **kwargs):
        self.health = 50
        self.attack = 5
        self.defense = 0

    def damage(self, opponent):
        dealt_damage = self.attack - opponent.defense
        if opponent.defense < self.attack:
            opponent.health -= dealt_damage

    @property
    def is_alive(self):
        if self.health > 0:
            return True
        else:
            return False

    def __str__(self):
        return "health: " + str(self.health) + "attack: " + str(self.attack)


class Rookie(Warrior):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.health = 50
        self.attack = 1


class Knight(Warrior):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.health = 50
        self.attack = 7


class Defender(Warrior):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.health = 60
        self.attack = 3
        self.defense = 2


class Vampire(Warrior):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.health = 40
        self.attack = 4
        self.defense = 0
        self.vampirism = 0.5

    # special damage - curing self
    def damage(self, opponent):
        dealt_damage = self.attack - opponent.defense
        if opponent.defense < self.attack:
            opponent.health -= dealt_damage
        self.health += dealt_damage * self.vampirism


class Lancer(Warrior):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.health = 50
        self.attack = 6
        self.defense = 0

    # special damage - damage one opponent behind
    def damage(self, opponent1, opponent2=None):
        dealt_damage = self.attack - opponent1.defense
        if opponent1.defense < self.attack:
            opponent1.health -= dealt_damage
        if opponent2:
            if opponent2.defense < self.attack:
                opponent2.health -= dealt_damage * 0.5


def fight(unit1, unit2):
    # if fight is a duet only
    while unit1.is_alive and unit2.is_alive:
        unit1.damage(unit2)
        if unit2.is_alive:
            unit2.damage(unit1)
            if not unit1.is_alive:
                # print("u1 is dead")
                # print("u1: " + str(unit_1.health) + ", u2: " + str(unit_2.health))
                return False
        else:
            # print("u2 is dead")
            # print("u1: " + str(unit_1.health) + ", u2: " + str(unit_2.health))
            return True


class Army:
    def __init__(self):
        self._members = []
        self._it = iter(self._members)

    def __iter__(self):
        return self

    def __next__(self):
        try:
            return next(self._it)
        except StopIteration:
            raise

    def add_units(self, cls, units: int):
        for _ in range(0, units):
            self._members.append(cls())

    @property
    def members(self):
        return self._members

    @property
    def anyalive(self):
        for x in self._members:
            if x.is_alive:
                return True
        else:
            return False


class Battle:
    def __init__(self):
        pass

    def fight(self, army1: Army, army2: Army):

        try:
            team1f = next(army1)
        except StopIteration:
            return False
        else:
            try:
                team2f = next(army2)
            except StopIteration:
                return True

        try:
            team1b = next(army1)
        except StopIteration:
            team1b = None

        try:
            team2b = next(army2)
        except StopIteration:
            team2b = None

        while team1f.is_alive and team2f.is_alive:
            # team 1 forward is attacking
            if team1f is Lancer:
                team1f.damage(team2f, team2b)
            else:
                team1f.damage(team2f)

            # check team 2 backup is exist and still alive
            if team2b:
                if not team2b.is_alive:
                    try:
                        team2b = next(army2)
                    except StopIteration:
                        team2b = None

            # check team 2 forward is still alive
            if team2f.is_alive:
                # then, attack team 1 and see if he's alive
                if team2f is Lancer:
                    team2f.damage(team1f, team1b)
                else:
                    team2f.damage(team1f)

                # check team 1 backup is exist and still alive
                if team1b:
                    if not team1b.is_alive:
                        try:
                            team1b = next(army1)
                        except StopIteration:
                            team1b = None

                # check team 1 forward is still alive
                if not team1f.is_alive:
                    # print("team1f is dead: " + str(type(team1f)))
                    if team1b:
                        team1f = team1b
                        try:
                            team1b = next(army1)
                        except StopIteration:
                            team1b = None
                else:
                    continue

            else:
                # print("team2f is dead: " + str(type(team2f)))
                if team2b:
                    team2f = team2b
                    try:
                        team2b = next(army2)
                    except StopIteration:
                        team2b = None

        if army1.anyalive and not army2.anyalive:
            # print("army1 wins")
            return True
        else:
            # print("army2 wins")
            return False


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing

    # fight tests
    chuck = Warrior()
    bruce = Warrior()
    carl = Knight()
    dave = Warrior()
    mark = Warrior()
    bob = Defender()
    mike = Knight()
    rog = Warrior()
    lancelot = Defender()
    eric = Vampire()
    adam = Vampire()
    richard = Defender()
    ogre = Warrior()
    freelancer = Lancer()
    vampire = Vampire()

    assert fight(chuck, bruce) == True
    assert fight(dave, carl) == False
    assert chuck.is_alive == True
    assert bruce.is_alive == False
    assert carl.is_alive == True
    assert dave.is_alive == False
    assert fight(carl, mark) == False
    assert carl.is_alive == False
    assert fight(bob, mike) == False
    assert fight(lancelot, rog) == True
    assert fight(eric, richard) == False
    assert fight(ogre, adam) == True
    assert fight(freelancer, vampire) == True
    assert freelancer.is_alive == True

    # battle tests
    my_army = Army()
    my_army.add_units(Defender, 2)
    my_army.add_units(Vampire, 2)
    my_army.add_units(Lancer, 4)
    my_army.add_units(Warrior, 1)

    enemy_army = Army()
    enemy_army.add_units(Warrior, 2)
    enemy_army.add_units(Lancer, 2)
    enemy_army.add_units(Defender, 2)
    enemy_army.add_units(Vampire, 3)

    army_3 = Army()
    army_3.add_units(Warrior, 1)
    army_3.add_units(Lancer, 1)
    army_3.add_units(Defender, 2)

    army_4 = Army()
    army_4.add_units(Vampire, 3)
    army_4.add_units(Warrior, 1)
    army_4.add_units(Lancer, 2)

    battle = Battle()

    assert battle.fight(my_army, enemy_army) == True
    assert battle.fight(army_3, army_4) == False
    print("Coding complete? Let's try tests!")



if __name__ == '__main__':
    #These "asserts" using only for self-checking and not necessary for auto-testing
    
    #fight tests
    chuck = Warrior()
    bruce = Warrior()
    carl = Knight()
    dave = Warrior()
    mark = Warrior()
    bob = Defender()
    mike = Knight()
    rog = Warrior()
    lancelot = Defender()
    eric = Vampire()
    adam = Vampire()
    richard = Defender()
    ogre = Warrior()
    freelancer = Lancer()
    vampire = Vampire()
    priest = Healer()

    assert fight(chuck, bruce) == True
    assert fight(dave, carl) == False
    assert chuck.is_alive == True
    assert bruce.is_alive == False
    assert carl.is_alive == True
    assert dave.is_alive == False
    assert fight(carl, mark) == False
    assert carl.is_alive == False
    assert fight(bob, mike) == False
    assert fight(lancelot, rog) == True
    assert fight(eric, richard) == False
    assert fight(ogre, adam) == True
    assert fight(freelancer, vampire) == True
    assert freelancer.is_alive == True
    assert freelancer.health == 14    
    priest.heal(freelancer)
    assert freelancer.health == 16

    #battle tests
    my_army = Army()
    my_army.add_units(Defender, 2)
    my_army.add_units(Healer, 1)
    my_army.add_units(Vampire, 2)
    my_army.add_units(Lancer, 2)
    my_army.add_units(Healer, 1)
    my_army.add_units(Warrior, 1)
    
    enemy_army = Army()
    enemy_army.add_units(Warrior, 2)
    enemy_army.add_units(Lancer, 4)
    enemy_army.add_units(Healer, 1)
    enemy_army.add_units(Defender, 2)
    enemy_army.add_units(Vampire, 3)
    enemy_army.add_units(Healer, 1)

    army_3 = Army()
    army_3.add_units(Warrior, 1)
    army_3.add_units(Lancer, 1)
    army_3.add_units(Healer, 1)
    army_3.add_units(Defender, 2)

    army_4 = Army()
    army_4.add_units(Vampire, 3)
    army_4.add_units(Warrior, 1)
    army_4.add_units(Healer, 1)
    army_4.add_units(Lancer, 2)

    battle = Battle()

    assert battle.fight(my_army, enemy_army) == False
    assert battle.fight(army_3, army_4) == True
    print("Coding complete? Let's try tests!")