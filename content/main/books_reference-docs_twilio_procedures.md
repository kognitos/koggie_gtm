---
title: Procedures | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/twilio/procedures
description: Automation procedures in the Twilio book.
---

# Procedures | Books | Kognitos Documentation

The following documentation is forTwilio v2.0.1(BDK).

Ensure that you have installed or connected theTwiliobook and created a new playground before using these automation procedures.

## hashtagto read some (SMSmessages)

Get SMS messages from the Twilio API.

Output Concepts

SMS messages

A list of SMS messages that matches the specified filtering criteria

twilio sms message

Retrieve SMS messages filtered by sender and recipient numbers

Retrieve SMS messages filtered by the date in which they were sent

Retrieve SMS messages that were sent in the specified time period

## hashtagto send anSMSmessage

Send an SMS message using the Twilio API.

Input Concepts

sender number

The Twilio phone number to send the message from

(no default)

recipient number

The recipient's phone number

(no default)

message body

The body of the SMS message to send

(no default)

Output Concepts

The SID of the sent message if successful, otherwise None.

Send an SMS message

Last updated11 days ago

Was this helpful?
