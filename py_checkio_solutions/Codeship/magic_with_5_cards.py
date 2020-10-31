#!/usr/bin/env checkio --domain=py run magic-with-5-cards

# code { background: transparent; white-space: nowrap; }    code.r { color: red; }    code.b { color: #163e69; }    table { border-collapse: collapse; }    th, td { border: 1px solid #163e69; padding: 5px; }    th, td:first-child { text-align: center; font-weight: bold; }    th:first-child { border: 0px; }    p, li { text-align: justify; }
# END_DESC

RANKS = tuple('A 2 3 4 5 6 7 8 9 10 J Q K'.split())
SUITS = tuple('♣♦♥♠')


def bot(*cards, n=1):
    """Determine four cards the bot has to say to the magician."""
    # Obviously not always just the first four, put your code here instead.
    return cards[:4]


def magician(*cards, n=1):
    """Determine the fifth card with only four cards."""
    # Obviously not a random card, put your code here instead.
    from random import choice
    deck = [f'{r} {s}' for r in RANKS for s in SUITS]
    for card in cards:
        deck.remove(card)
    return choice(deck)


if __name__ == '__main__':
    assert list(bot('A ♥', '3 ♦', 'K ♠', 'Q ♣', 'J ♦')) == ['J ♦', 'A ♥', 'Q ♣', 'K ♠']
    assert magician('J ♦', 'A ♥', 'Q ♣', 'K ♠') == '3 ♦'

    assert list(bot('10 ♦', 'J ♣', 'Q ♠', 'K ♥', '7 ♦', n=2)) == ['Q ♠', '7 ♦', 'J ♣', 'K ♥']
    assert magician('Q ♠', '7 ♦', 'J ♣', 'K ♥', n=2) == '10 ♦'