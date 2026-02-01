---
title: Concepts | Books | Kognitos Documentation
url: https://docs.kognitos.com/books/reference-docs/gmail/concepts
description: Concepts used in Gmail book.
---

# Concepts | Books | Kognitos Documentation

The following documentation is forGmail v2.0.1(BDK).

### hashtagGmail email

A Gmail Email represents an email message in Gmail.

The unique identifier for the email.

The unique identifier for the thread containing the email.

The list of labels applied to the email.

list of text

The state of the email (draft, unread, or read).

The sender of the email.

The recipients of the email.

list of text

The unique identifier for the message.

optional[text]

cc_recipients

The cc recipients of the email.

optional[list of text]

bcc_recipients

The bcc recipients of the email.

optional[list of text]

attachments

The attachments of the email.

optional[list of gmail attachment reference]

The subject of the email.

optional[text]

The plain text body of the email.

optional[text]

The html body of the email.

optional[text]

sent_date_time

The date and time the email was sent.

optional[datetime]

received_date_time

The date and time the email was received.

optional[datetime]

### hashtagGmail attachment reference

A Gmail Attachment Reference represents a reference to a file attached to an email in Gmail.

The unique identifier for the attachment.

The unique identifier for the email.

The name of the attachment.

The size of the file in bytes.

### hashtagGmail attachment

A Gmail Attachment represents a file with name.

The name of the attachment.

The content of the attachment.

Last updated11 days ago

Was this helpful?
