#!/usr/bin/env checkio --domain=py run barcode-reader

# Learning barcode specifications and implementing a barcode reader with Python.
# 
# This time I will useEAN-13 (from Wikipedia).
# 
# The input is a String of length 95 representing the barcode. Each databit is displayed by an underscore or space. An underscore is the bar area. The input may be reversed. You should decode the barcode so that the output was a String of length 13.
# 
# In case a barcode does not conform to the specifications, return None.
# 
# The input final digit is the checksum. It is calculated from the other 12 digits, but in this mission it may be wrong. You must return None for this.
# 
# Input:The image of the barcode is a String of length 95. It consists only of underscores or spaces.
# 
# Output:The decoded barcode number is a String of length 13 or None.
# 
# How it is used:
# understand the mechanism of a barcode.
# 
# Precondition:
# len(barcode) == 95all(b in ('_', ' ') for b in barcode)
# 
# 
# END_DESC

def barcode_reader(barcode):
    return None


if __name__ == '__main__':
    assert barcode_reader(
        '_ _   _ __ _  ___ __  __  _  __ ____ _  ___ _ _ _ __  __ __ __  _    _ _ ___  _  ___ _   _  _ _'
    ) == '5901234123457', '5901234123457'

    assert barcode_reader(
        '_ _  _  __  _ ___   _ __ _ ____   _  _  _   _ _ _ _ _    __  __ _    _ _ _    _ _    _  ___ _ _'
    ) == '4299687613665', '4299687613665'

    assert barcode_reader(
        '_ _ ___ __  __  _  _  __ ____ _ _   __ __   _ _ _ _ _    _   _  _  _   ___ _  __  __ __ __  _ _'
    ) is None, '0712345678912 : wrong check digit (right: 1)'

    assert barcode_reader(
        '___  _  __  _ ___   _ __ _ ____   _  _  _   _ _ _ _ _    __  __ _    _ _ _    _ _    _  ___ _ _'
    ) is None, 'wrong left guard bar'
    
    assert barcode_reader(
        '_ _  _  __  _ ___   _ __ _ ____   _  _  _   _ _ ___ _    __  __ _    _ _ _    _ _    _  ___ _ _'
    ) is None, 'wrong center bar'

    assert barcode_reader(
        '_ _  _  __  _ ___   _ __ _ ____   _  _  _   _ _ _ _ _    __  __ _    _ _ _    _ _    _  ___ ___'
    ) == None, 'wrong right guard bar'

    print("Check done.")