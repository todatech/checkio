#!/usr/bin/env checkio --domain=py run correct-whatsup

# To solve this task you’ll need to create an account on Twilio (it's absolutely free) to get auth_token and account_sid. Here is ashort videothat will tell you how to do this. In addition, you’ll need to use the WhatsUp API from Twilio. You canread more about this here.
# 
# Oftentimes, when sending a message through WhatsUp, we don’t really bother starting a sentence with a capital letter and ending it with a period. We are in a hurry. But what if the program will correct this for you?
# 
# Write a program that will send WhatsUp message with automatically corrected sentences that start with a capital letter, and end with a dot.
# 
# Input:Three arguments, all strings: from number, to number and message line.
# 
# Output:None.
# 
# Example:
# 
# send_message('whatsapp:+15017122661', 'whatsapp:+15017122662', 'Hi!')
# 
# END_DESC

from twilio.rest import Client

# Your Account Sid and Auth Token from twilio.com/console
ACCOUNT_SID = 'your_acount_sid'
AUTH_TOKEN = 'your_auth_token'


def send_message(sender, to, body):
    """
        sends message
    """
    # your code here

if __name__ == '__main__':
    # These "asserts" are used for self-checking and not for an auto-testing
    send_message('whatsapp:+15017122661', 'whatsapp:+15017122662', 'Hi!')
    print("Coding complete? Click 'Check' to earn cool rewards!")