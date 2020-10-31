#!/usr/bin/env checkio --domain=py run cakes-rows

# .story img {        float: left;        /*padding: 10px;*/        margin: 10px;        border: black;        /*box-shadow: 0 0 20px 10px rgba(0,0,0,1);*/        /*-moz-box-shadow: 0 0 20px 10px rgba(0,0,0,1);*/        /*-webkit-box-shadow: 0 0 20px 10px rgba(0,0,0,1);*/    }"We must burn the house down!" said the Rabbit's voice; and        Alice called out as loud as she could, "If you do. I'll set        Dinah at you!"
# 
# There was a dead silence instantly, and Alice thought to        herself, "I wonder what they WILL do next! If they had any        sense, they'd take the roof off." After a minute or two, they        began moving about again, and Alice heard the Rabbit say, "A        barrowful will do, to begin with."
# 
# "A barrowful of WHAT? thought Alice; but she had not long to        doubt, for the next moment a shower of little pebbles came        rattling in at the window, and some of them hit her in the face.        "Ill put a stop to this, she said to herself, and shouted out,        "You'd better not do that again! which produced another dead        silence.
# 
# Alice noticed with some surprise that the pebbles were all        turning into little cakes as they lay on the floor, and a bright        idea came into her head. "If I eat one of these cakes, she        thought, "its sure to make SOME change in my size; and as it        cant possibly make me larger, it must make me smaller, I        suppose.
# 
# "Alice's adventures in wonderland." Lewis Carroll
# 
# Someone has decided to bake a load of cakes and place them on the floor.    Our robots can't help but try to find a pattern behind the cakes' disposition.    Some cakes form rows, we want to count these rows.    A row is a sequence of three or more cakes if we can draw a straight line through its centers.    The greater row takes up the smaller rows. So if we have a row with 4 cakes, then we have only one row (not 4 by 3).
# 
# The cake locations are represented as a list of coordinates.    A coordinate is a list of two integers. You should count the rows.
# 
# 
# 
# Input:Сoordinates as a list of lists with two integers.
# 
# Output:The quantity of rows as an integer.
# 
# Precondition:0<|coordinates|<20
# ∀ x,y ∈ coordinates : 0 ≤ x,y ≤ 10
# 
# 
# 
# END_DESC

def checkio(cakes):
    return 0

#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    assert checkio([[3, 3], [5, 5], [8, 8], [2, 8], [8, 2]]) == 2
    assert checkio(
        [[2, 2], [2, 5], [2, 8], [5, 2], [7, 2], [8, 2],
         [9, 2], [4, 5], [4, 8], [7, 5], [5, 8], [9, 8]]) == 6