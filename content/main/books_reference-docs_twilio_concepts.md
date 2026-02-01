---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/twilio/concepts
description: Concepts used in Twilio book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forTwilio v2.0.1(BDK).

### hashtagTwilio sms message

SMS message data model.An SMS (Short Message Service) message. Represents a text communication sent over a cellular network, typically between mobile phones.

The unique, Twilio-provided string that identifies the Message resource.

optional[text]

The text content of the message

optional[text]

num_segments

The number of segments that make up the complete message. SMS message bodies that exceed thecharacter limitarrow-up-rightare segmented and charged as multiple messages. Note: For messages sent via a Messaging Service,num_segmentsis initially0, since a sender hasn't yet been assigned

optional[text]

sender_number

The sender's phone number (inE.164arrow-up-rightformat),alphanumeric sender IDarrow-up-right,Wireless SIMarrow-up-right,short codearrow-up-right, orchannel addressarrow-up-right(e.g.,whatsapp:+15554449999). For incoming messages, this is the number or channel address of the sender. For outgoing messages, this value is a Twilio phone number, alphanumeric sender ID, short code, or channel address from which the message is sent

optional[text]

recipient_number

The recipient's phone number (inE.164arrow-up-rightformat) orchannel addressarrow-up-right(e.g.whatsapp:+15552229999)

optional[text]

The amount billed for the message in the currency specified byprice_unit. Thepriceis populated after the message has been sent/received, and may not be immediately available. View thePricing pagearrow-up-rightfor more details.

optional[number]

account_sid

The SID of theAccountarrow-up-rightassociated with the Message resource

The number of media files associated with the Message resource.

The status of the message, for more information about possible statuses seeMessage Statusarrow-up-right

optional[text]

messaging_service_sid

The SID of theMessaging Servicearrow-up-rightassociated with the Message resource. A unique default value is assigned if a Messaging Service is not used.

TheRFC 2822arrow-up-righttimestamp (in GMT) of when the Message was sent. For an outgoing message, this is when Twilio sent the message. For an incoming message, this is when Twilio sent the HTTP request to your incoming message webhook URL.

optional[datetime]

date_created

TheRFC 2822arrow-up-righttimestamp (in GMT) of when the Message resource was created

optional[datetime]

date_updated

TheRFC 2822arrow-up-righttimestamp (in GMT) of when the Message resource was last updated

optional[datetime]

The currency in whichpriceis measured, inISO 4127arrow-up-rightformat (e.g.usd,eur,jpy).

Theerror codearrow-up-rightreturned if the Messagestatusisfailedorundelivered. If no error was encountered, the value isnull.

optional[number]

error_message

The description of theerror_codeif the Messagestatusisfailedorundelivered. If no error was encountered, the value isnull.

optional[text]

Last updated11 days ago

Was this helpful?
