#!/usr/bin/env checkio --domain=py run weekend-counter

# Sofia has given you a schedule and two dates and told you she needs help planning her weekends.     She has asked you to count each day of rest (Saturday and Sunday) starting from the initial date to final date.     You should count the initial and final dates if they fall on a Saturday or Sunday.
# 
# The dates are given asdatetime.date(Read about this module here).    The result is an integer.
# 
# Input:Start and end date as datetime.date.
# 
# Output:The quantity of the rest days as an integer.
# 
# Precondition:start_date < end_date.
# 
# 
# END_DESC

from datetime import date, timedelta


def checkio(from_date, to_date):

    a = from_date
    my_weekends = 0
    while a <= to_date:
        # print(a)
        if a.weekday() == 5 or a.weekday() == 6:
            my_weekends += 1
        a += timedelta(1)
    print(my_weekends)
    return my_weekends


#These "asserts" using only for self-checking and not necessary for auto-testing
if __name__ == '__main__':
    assert checkio(date(2013, 9, 18), date(2013, 9, 23)) == 2, "1st example"
    assert checkio(date(2013, 1, 1), date(2013, 2, 1)) == 8, "2nd example"
    assert checkio(date(2013, 2, 2), date(2013, 2, 3)) == 2, "3rd example"