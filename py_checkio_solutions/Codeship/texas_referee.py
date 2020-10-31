#!/usr/bin/env checkio --domain=py run texas-referee

# There are few things that are so unpardonably neglected in our country as poker. The upper class knows very little about poker. Now and    then you find ambassadors who have sort of a general knowledge of poker, but the ignorance of the people is fearful. Why, I have known    clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a "flush". It is enough to make one    ashamed of the species.
# -- Mark TwainTexas hold'emis a variation of the standard card game of poker.    Two cards (hole cards) are dealt face down to each player and then five community cards are placed face-up by the dealer.    And when all openings we need to define what is the combination a player have.
# 
# You are given a sequence of 7 cards and you should choose the best hand (5 cards) in it.    Card sequence are described as a string, where each card are defined by two character - rank and suit.    Cards separated by commas.
# 
# The descending ranks are: "A" (Ace), "K" (King), "Q" (Queen), "J" (Jack), "T" (Ten), and "9" to "2".
# The descending suits are "h" (hearts), "d" (diamonds), "c" (clubs), "s" (spades).
# 
# Texas holdem uses the classicalpoker hand list:    Straight flush, Four of a kind, Full house, Flush, Straight, Three of a kind, Two Pair, One Pair and High card.
# 
# Because of the presence of community cards in Texas hold 'em, different players' hands can often come very close in value.    As a result, it is common for kickers to be used to determine    the winning hand for cases where two or more hands tie.    A kicker is a card which is part of the five-card poker hand,    but is not used in determining a hand's rank. For instance, in the hand A-A-A-K-Q, the king and queen are kickers.
# 
# In our version of Texas Hold'em cards of differing suits have different values.    This means that there is only everonebest five-card hand to return.    So "Td" is higher than "Tc", but lower then "Jc".
# 
# Your goal is to choose the best hand with 5 cards and return them as a string, where cards are separated by commas and    ordering from the highest to lowest value.    For example: We have two pair by queens (heart and spades) and eights (diamonds and clubs) and nine heart as a kicker.    The result: "Qh,Qs,9h,8d,8c". Be careful with order.
# 
# Input:A list of cards as a string.
# 
# Output:The best hand as a string.
# 
# Precondition:
# 
# 
# cards_quantity == 7
# All cards correct and unique.
# 
# END_DESC

RANKS = "23456789TJQKA"
SUITS = "scdh"


def texas_referee(cards_str):
    return ""


if __name__ == '__main__':
    # These "asserts" using only for self-checking and not necessary for auto-testing
    assert texas_referee("Kh,Qh,Ah,9s,2c,Th,Jh") == "Ah,Kh,Qh,Jh,Th", "High Straight Flush"
    assert texas_referee("Qd,Ad,9d,8d,Td,Jd,7d") == "Qd,Jd,Td,9d,8d", "Straight Flush"
    assert texas_referee("5c,7h,7d,9s,9c,8h,6d") == "9c,8h,7h,6d,5c", "Straight"
    assert texas_referee("Ts,2h,2d,3s,Td,3c,Th") == "Th,Td,Ts,3c,3s", "Full House"
    assert texas_referee("Jh,Js,9h,Jd,Th,8h,Td") == "Jh,Jd,Js,Th,Td", "Full House vs Flush"
    assert texas_referee("Js,Td,8d,9s,7d,2d,4d") == "Td,8d,7d,4d,2d", "Flush"
    assert texas_referee("Ts,2h,Tc,3s,Td,3c,Th") == "Th,Td,Tc,Ts,3c", "Four of Kind"
    assert texas_referee("Ks,9h,Th,Jh,Kd,Kh,8s") == "Kh,Kd,Ks,Jh,Th", "Three of Kind"
    assert texas_referee("2c,3s,4s,5s,7s,2d,7h") == "7h,7s,5s,2d,2c", "Two Pairs"
    assert texas_referee("2s,3s,4s,5s,2d,7h,8h") == "8h,7h,5s,2d,2s", "One Pair"
    assert texas_referee("3h,4h,Th,6s,Ad,Jc,2h") == "Ad,Jc,Th,6s,4h", "High Cards"